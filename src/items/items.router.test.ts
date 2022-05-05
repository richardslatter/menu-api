import { Item } from "./item.interface";
import request from "supertest";
import app from "../app";

const stubItem = (): Item => {
  return {
    id: 0,
    name: "burger",
    price: 199,
    description: "big",
    image: "www.google.com",
  };
};

jest.mock("./items.service", () => ({
  ...jest.requireActual("./items.service"),
  findAll: jest.fn(() => {
    return stubItem();
  }),

  find: jest.fn(() => {
    return null;
  }),

  create: jest.fn(() => {
    return 0;
  }),

  remove: jest.fn(() => {
    return null;
  }),
}));

describe("Item Router Querying API", () => {
  it("returns 200 ok and the Items after API request", async () => {
    //expect(services).toHaveBeenCalledTimes(0);

    const response = await request(app).get("/api/menu/items").expect(200);

    expect(response.body).toEqual(stubItem());
  });

  it("returns 404 if Item cannot be found", async () => {
    const id = 1;

    const response = await request(app)
      .get("/api/menu/items/" + id)
      .expect(404);
  });

  it("returns 500 internal if there is an error", async () => {
    const server = app.listen(7123);

    const response = await request(app).post("/api/menu/items/").expect(500);

    expect(response.body).toEqual(
      "Cannot create item, id invalid or does not exist"
    );

    server.close();
  });

  it("returns 204 if item is deleted", async () => {
    const id = 1;

    const response = await request(app)
      .delete("/api/menu/items/" + id)
      .expect(204);
  });
});
