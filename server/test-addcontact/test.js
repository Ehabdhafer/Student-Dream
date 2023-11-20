// contactUsController.test.js
const { addContactMessage } = require("../Controller/ContactUsController");
const ContactUs = require("../Models/contactUsSchema ");

describe("addContactMessage", () => {
  test("should add a new contact message for a user", async () => {
    const req = {
      body: {
        name: "issa",
        email: "issahaddadhaddad@gmail.com",
        message: "hhi jesti",
      },
      user: {
        _id: "2",
        role: "user",
      },
    };

    const res = {
      json: jest.fn(),
    };

    const newMessageSaveMock = jest.spyOn(ContactUs.prototype, "save");
    newMessageSaveMock.mockResolvedValue({
      name: "issadsw",
      email: "issahaddadhaddad@gmail.com",
      message: "hi ",
      user: "65584f4d4a6ff886a9efc38b",
      senderType: "user",
      save: jest.fn(),
    });

    await addContactMessage(req, res);
    newMessageSaveMock.mockRestore();
  });
});

describe("ALL", () => {
  describe("no name", () => {
    test.only("should check the presence of name", () => {
      const contactUsInstance = new ContactUs({
        name: "issa haddad",
      });

      expect(contactUsInstance.name).toBe("issa haddad");
    });
  });

  describe("no email", () => {
    test.only("should check the presence of name", () => {
      const contactUsInstance = new ContactUs({
        email: "john@gmail.com",
      });

      expect(contactUsInstance.email).toBe("john@gmail.com");
    });
  });

  describe("no massege", () => {
    test.only("should check the presence of name", () => {
      const contactUsInstance = new ContactUs({
        message: "Hello, this is a test message.",
      });

      expect(contactUsInstance.message).toBe("Hello, this is a test message.");
    });
  });

  describe("no senderType", () => {
    test.only("should check the presence of name", () => {
      const contactUsInstance = new ContactUs({
        senderType: "student",
      });

      expect(contactUsInstance.senderType).toBe("student");
    });
  });
});
