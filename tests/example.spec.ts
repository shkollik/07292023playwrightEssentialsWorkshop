import { test, expect } from '@playwright/test';
import { Application } from './pages/app';

test('new user can buy a product', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(`test+${Date.now()}@noemail.com`);
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').press('Tab');
  await page.getByPlaceholder('Please Enter Your First Name').fill('Vlad');
  await page.getByPlaceholder('Please Enter Your First Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Last Name').fill('Shkola');
  await page.getByPlaceholder('Please Enter Your Last Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Password').fill('1233456');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('button', { name: 'your cart have 1 items' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
});

test('user can add a review', async ({ page }) => {
  const app = new Application(page);
  
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await app.signUp.signUpNewUser();

  
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();

  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();
  await page.locator('body').press('ArrowDown');
  await page.getByPlaceholder('Enter Review title').click();
  await page.getByPlaceholder('Enter Review title').fill('est');
  await page.getByPlaceholder('Enter Review title').click();
  await page.getByPlaceholder('Write Review').click();
  await page.getByPlaceholder('Write Review').fill('test');
  await page.getByLabel('add rating by typing an integer from 0 to 5 or pressing arrow keys').locator('i').nth(4).click();
  await page.getByRole('button', { name: 'Publish Review' }).click();  

  expect(page.locator('.notification-title')).toHaveText('Your review has been added successfully and will appear when approved!');
});