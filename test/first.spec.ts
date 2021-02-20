import { app } from "../src/app";
test('the app initializes', () => {
    expect(app.mountpath).toBe('/');
});