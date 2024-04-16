import { UserModule } from './user.module';

describe('UserModule', () => {
  const module: UserModule = new UserModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
