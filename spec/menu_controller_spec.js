const MenuController = require("../controllers/MenuController");
// #1
 describe("MenuController", () => {
    beforeEach(() => {
      this.menu = new MenuController();
    });

    describe("#getContactCount()", () => {
// #2
      it("should return 0 when no contacts are in the book",() =>                 {
        expect(this.menu.getContactCount()).toBe(0);
      });


      it("should return 1 when there is exactly one contact in the book", () => {
        
        this.menu.book.addContact("Bob", "555-555-5555");
        expect(this.menu.getContactCount()).toBe(1)
      });
   });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 508b71d106ae95a6965b7711fd4a9e8cdd81e657

>>>>>>> menu-test
=======
>>>>>>> 18a9286b79c55843885775134b4740b1c64abb42
});

