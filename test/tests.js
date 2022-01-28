import './example.test.js';
import './tests,js';

// IMPORT MODULES under test here:
import { createCountString } from './functions.js';

const { test } = QUnit;

test('bunny rabbit should become bunny rabbit!!!', (expect) => {
    //Arrange
    //Arguments and expectations
    const expected = `You have changed the city 4 times, the style 5 times, and the activity 1 times. And your slogan is cool.`;

    //Act
    //Call function and set result to constant
    const actual = createCountString(3, 4, 5);

    //Expect
    //Make assertions about what is expected versus actual
    expect.equal(actual, expected);
});
