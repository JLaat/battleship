import Ship from './Ship';
import { render } from '@testing-library/react';

describe("Creating ships with factory function", () => {
    describe("When creating ship with length of 4", () => {
        it("Should return a ship object with length of 4", () => {
            const ship = Ship(4);
            expect(ship.length).toBe(4);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(4);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(4);
            expect(ship.sunken).toBe(false);
        })
        it("Calling hit() should increase hits by 1", () => {
            const ship = Ship(2);
            ship.hit();
            expect(ship.hits).toBe(1);
        })
        it("Calling hit() twice should increase hits by 2", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            expect(ship.hits).toBe(2);
        })
        it("Calling hit() three times should increase hits by 3", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            ship.hit();
            expect(ship.hits).toBe(3);
        })
        it("Calling hit() four times should increase hits by 4", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            ship.hit();
            ship.hit();
            expect(ship.hits).toBe(4);
        })
        it("Calling isSunk() should return false", () => {
            const ship = Ship(2);
            expect(ship.isSunk()).toBe(false);
        })
        it("Calling isSunk() after 4 x hit():s should return true", () => {
            const ship = Ship(4);
            ship.hit();
            ship.hit();
            ship.hit();
            ship.hit();
            expect(ship.isSunk()).toBe(true);
        })
    })
    describe("When creating ship with length of 3", () => {
        it("Should return a ship object with length of 3", () => {
            const ship = Ship(3);
            expect(ship.length).toBe(3);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(3);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(3);
            expect(ship.sunken).toBe(false);
        })
        it("Calling hit() should increase hits by 1", () => {
            const ship = Ship(2);
            ship.hit();
            expect(ship.hits).toBe(1);
        })
        it("Calling hit() twice should increase hits by 2", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            expect(ship.hits).toBe(2);
        })
        it("Calling hit() three times should increase hits by 3", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            ship.hit();
            expect(ship.hits).toBe(3);
        })
        it("Calling isSunk() should return false", () => {
            const ship = Ship(2);
            expect(ship.isSunk()).toBe(false);
        })
        it("Calling isSunk() after 3 x hit():s should return true", () => {
            const ship = Ship(3);
            ship.hit();
            ship.hit();
            ship.hit();
            expect(ship.isSunk()).toBe(true);
        })
    })
    describe("When creating ship with length of 2", () => {
        it("Should return a ship object with length of 2", () => {
            const ship = Ship(2);
            expect(ship.length).toBe(2);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(2);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(2);
            expect(ship.sunken).toBe(false);
        })
        it("Calling hit() should increase hits by 1", () => {
            const ship = Ship(2);
            ship.hit();
            expect(ship.hits).toBe(1);
        })
        it("Calling hit() twice should increase hits by 2", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            expect(ship.hits).toBe(2);
        })
        it("Calling isSunk() should return false", () => {
            const ship = Ship(2);
            expect(ship.isSunk()).toBe(false);
        })
        it("Calling isSunk() after 2 x hit():s should return true", () => {
            const ship = Ship(2);
            ship.hit();
            ship.hit();
            expect(ship.isSunk()).toBe(true);
        })
    })
    describe("When creating ship with length of 1", () => {
        it("Should return a ship object with length of 1", () => {
            const ship = Ship(1);
            expect(ship.length).toBe(1);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(1);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(1);
            expect(ship.sunken).toBe(false);
        })
        it("Calling hit() should increase hits by 1", () => {
            const ship = Ship(2);
            ship.hit();
            expect(ship.hits).toBe(1);
        })
        it("Calling isSunk() should return false", () => {
            const ship = Ship(2);
            expect(ship.isSunk()).toBe(false);
        })
        it("Calling isSunk() after 1 x hit():s should return true", () => {
            const ship = Ship(1);
            ship.hit();
            expect(ship.isSunk()).toBe(true);
        })
    })
})

export {}