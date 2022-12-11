import { test, expect } from '@playwright/test';
const polygonExplorer = "https://mumbai.polygonscan.com/";
const poloygonFaucet = "https://mumbaifaucet.com/";
const learnweb3Addr = "0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5";
const goerliFaucet = "https://goerlifaucet.com/";

test('test', async ({ page }) => {
  
});



test('test_getMatic_goerli', async ({ page }) => {
  await page.goto('https://mumbaifaucet.com/');
  await page.getByPlaceholder('Enter Your Wallet Address (0x...)').click();
  await page.getByPlaceholder('Enter Your Wallet Address (0x...)').press('Control+a');
  await page.getByPlaceholder('Enter Your Wallet Address (0x...)').fill('0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5');
  await page.getByRole('button', { name: 'Send Me MATIC' }).click();
  await page.getByText('Sorry! To be fair to all developers, we only send 0.5 Mumbai MATIC every 24 hour').click();
  // const [page1] = await Promise.all([
  //   page.waitForEvent('popup'),
  //   page.getByRole('button', { name: 'goerli' }).click()
  // ]);
  // await page1.goto('https://goerlifaucet.com/');
  // await page1.goto('https://goerlifaucet.com/?__cf_chl_rt_tk=0YwZjQ5cFue_pkOZ9jQ.qo4aYJmGCAzpykdlIzvJZFU-1670777086-0-gaNycGzNCBE');
  // await page1.goto('https://goerlifaucet.com/');
  // await page1.goto('https://goerlifaucet.com/?__cf_chl_rt_tk=Gi7KW1XB77wsyyGMuTRtBXgSlF.liLWV45VP63j7BD8-1670777096-0-gaNycGzNCBE');
  // await page1.goto('https://goerlifaucet.com/');
  // await page1.goto('https://goerlifaucet.com/?__cf_chl_rt_tk=FaODKSp5alBcxHRECM1IhM1L_p.pmNaV7eBH0XX9JeM-1670777114-0-gaNycGzNB_0');
  // await page1.goto('https://goerlifaucet.com/');
  // await page1.goto('https://goerlifaucet.com/?__cf_chl_rt_tk=KbsHYWwgrihKrPLY0dLXGeHXI0h5QLn0tQW.sO.frVU-1670777132-0-gaNycGzNCBE');
  // await page1.goto('https://goerlifaucet.com/');
  // await page1.goto('https://goerlifaucet.com/?__cf_chl_rt_tk=WhFe03dcdPFObwC64Z8k77RUvYbVa_ylv2mQEwmsMUA-1670777146-0-gaNycGzNCBE');
  // await page1.goto('https://goerlifaucet.com/');
  // const [page2] = await Promise.all([
  //   page.waitForEvent('popup'),
  //   page.getByRole('button', { name: 'goerli' }).click()
  // ]);
});