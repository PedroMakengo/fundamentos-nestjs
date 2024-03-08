import { AuthService } from '../auth/auth.service';
import { jwtPayload } from './jwet-payload.mock';
import { accessToken } from './token.mock';

export const authServiceMock = {
  provide: AuthService,

  useValue: {
    createToken: jest.fn().mockReturnValue({ accessToken }),
    checkToken: jest.fn().mockReturnValue(jwtPayload),
    isValidToken: jest.fn().mockReturnValue(true),
    login: jest.fn().mockResolvedValue({ accessToken }),
    forget: jest.fn().mockResolvedValue({ success: true }),
    reset: jest.fn().mockResolvedValue({ accessToken }),
    register: jest.fn().mockResolvedValue({ accessToken }),
  },
};
