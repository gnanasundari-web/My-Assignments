import {test} from '@playwright/test'

test.describe('Annotation example', {tag: '@simple'},() => {

test.describe.configure({mode: "parallel",retries: 1})

test('Test One', async function ({page}) {
    console.log('Statement for test one');
    
})

test('Test Two', async function ({page}) {
    console.log('Statement for test two');
    
})

test('Test Three', async function ({page}) {
    console.log('Statement for test Three');
    
})

test('Test Four', async function ({page}) {
    console.log('Statement for test Four');
    
})

})