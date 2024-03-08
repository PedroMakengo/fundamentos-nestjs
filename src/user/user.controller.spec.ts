import { TestingModule, Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { userServiceMock } from '../testing/user-service.mock';
import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { RoleGuard } from '../guards/role.guard';
import { UserService } from './user.service';
import { createUserDTO } from '../testing/create-user.dto.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { updatePutUserDTO } from '../testing/update-put-user.dto.mock';
import { updatePatchUserDTO } from '../testing/update-patch-user.dto';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .overrideGuard(RoleGuard)
      .useValue(guardMock)
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  test('Validar a definição', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('Teste da aplicação dos Guards neste controle', () => {
    test('Se os guards estão aplicadas', () => {
      const guards = Reflect.getMetadata('__guards__', UserController);

      expect(guards.length).toEqual(2);
      expect(new guards[0]()).toBeInstanceOf(AuthGuard);
      expect(new guards[1]()).toBeInstanceOf(RoleGuard);
    });
  });

  describe('Create', () => {
    test('Create method', async () => {
      const result = await userController.create(createUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });

    test('Show method', async () => {
      const result = await userController.show(1);

      expect(result).toEqual(userEntityList[0]);
    });

    test('Update method', async () => {
      const result = await userController.update(1, updatePutUserDTO);
      expect(result).toEqual(userEntityList[0]);
    });

    test('UpdatePartial method', async () => {
      const result = await userController.updatePartial(1, updatePatchUserDTO);
      expect(result).toEqual(userEntityList[0]);
    });

    test('Delete method', async () => {
      const result = await userController.delete(1);
      expect(result).toEqual({ success: true });
    });
  });
});
