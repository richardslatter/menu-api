import app from "./app";

describe('The Express Web Application', () => {

    it('should start the express app', async () => {
        const PORT: number = parseInt(process.env.PORT as string, 10);
        const server = app.listen(process.env.PORT);
        expect(server).toBeDefined();
        server.close();
    });
})
