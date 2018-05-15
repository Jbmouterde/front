import { DangerPipe } from './danger.pipe';

describe('DangerPipe', () => {
  it('create an instance', () => {
    const pipe = new DangerPipe();
    expect(pipe).toBeTruthy();
  });
});
