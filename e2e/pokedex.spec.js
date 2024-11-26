const { test, expect } = require('@playwright/test')

const PORT = process.env.PORT || 5000
const BASE_URL = `http://localhost:${PORT}`

test.describe('Pokédex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto(BASE_URL)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('user can navigate to a Pokémon page and see its content', async ({
    page,
  }) => {
    await page.goto(BASE_URL)
    await page.click('text=ivysaur')
    await expect(page).toHaveURL(`${BASE_URL}/pokemon/ivysaur`)
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
