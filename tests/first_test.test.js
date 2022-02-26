


describe('Number operations', () => {

    test("1 plus 1 should be equal to 2", () => {

        expect(1 + 1).toBe(2);
        let a = 1
        let b = 2
        expect(a + b).toBe(3);
    });

    test("2 plus 2 should be equal to 4", () => {

        expect(2 + 2).toBe(4);
        let a = 2
        let b = 2
        expect(a + b).toBe(4);
    });

})


describe('testing others matchers methods', () => {

    test('Testing that a variable is undefined', () => {
        let number = undefined
        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    test('Should expect zero to act like zero', () => {
        let number = 0

        expect(number).toBe(0);
        expect(number).toEqual(0);
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
        expect(number).not.toBeNull();
        expect(number).not.toBeUndefined();
        expect(number).toBeDefined();
        expect(number).not.toBeGreaterThan(0);
        expect(number).not.toBeLessThan(0);
        expect(number).toBeGreaterThanOrEqual(0);
        expect(number).toBeLessThanOrEqual(0);
        expect(number).toBeCloseTo(0);
    })

    it('Number comparison', () => {
        const a = 1
        const b = 2
        expect(a).toBeLessThan(b);
        expect(a).toBeLessThanOrEqual(b);
        expect(a).toBeGreaterThan(b);
        expect(a).toBeGreaterThanOrEqual(b);
    })

    test("there should be no I in team", () => {
        let string = 'team';

        expect(string).not.toMatch(/I/);
    })


    test("there is 'stop' in Christopher", () => {
        let string = 'Christopher';

        expect(string).toMatch(/stop/);
    })

    const shoppingList = ["Milk", "Trash bags", "Paper towels", "Iphones"];
    test("the shopping list doesn't have PS4", () => {
        expect(shoppingList).not.toContain('PS4')
        expect(shoppingList).toContain('Milk')
    })
})


// testing primitive and reference type equality
describe("Testing Reference equality", () => {
    const user = {
        name: "Clement"
    }
    user['age'] = 45;

    test("Should return a user object with age as 45", () => {
        expect(user).toEqual({
            name: "Clement",
            age: 45
        })
    })


    test("Should return  a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        )
    })


    // TESTING ARRAY EQUALITY

    test("Array equality", () => {

        const users = [
            "Clement",
            "Sarah",
            "July"
        ]

        users.push("Jacob");

        expect(users).toEqual(["Clement", "Sarah", "July", "Jacob"])
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]));


        const userObjectInArray = [
            {
                user: "Clement",
                age: 12,
            },
            {
                user: "Sarah",
                age: 14,
            },
            {
                user: "July",
                age: 25,

            },
        ]

        userObjectInArray.push({
            name: "Phil",
            age: 57
        })

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )
    })



})



describe("Testing imported functions", () => {
    let users = [
        {
            name: "Clem",
            age: 12,
            id: 1,
        },
        {
            name: "Justin",
            age: 15,
            id: 2,
        },
        {
            name: "Sarah",
            age: 84,
            id: 3,
        },

    ]
    test("Sum function should add 2 numbers", () => {
        expect(sum(5, 3)).toBe(8)
    })

    test("delete by id function should delete a user by their id", () => {


        expect(deleteUserById(users, 3)).toEqual([
            {
                name: "Clem",
                age: 12,
                id: 1,
            },
            {
                name: "Justin",
                age: 15,
                id: 2,
            },
        ])

        expect(deleteUserById(users, 3).length).toBe(2)


    })
    // done by Test Driven Development
    test("Finds a user by ID from a list of users", () => {

        expect(findUserById(users, 2)).toEqual({
            name: "Justin",
            age: 15,
            id: 2,
        })

        expect(findUserById(users, 10)).toBeUndefined()

    })
})
