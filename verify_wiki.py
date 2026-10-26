import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        file_path = os.path.abspath("wiki.html")
        await page.goto(f"file://{file_path}#/tree/overview")
        await page.wait_for_timeout(1000)

        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        await page.screenshot(path="/home/jules/verification/screenshots/wiki_tree.png")

        # Navigate to DB Heroes
        await page.goto(f"file://{file_path}#/db/heroes")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="/home/jules/verification/screenshots/wiki_db.png")

        # Click on first hero card
        card = page.locator(".db-card").first
        await card.click()
        await page.wait_for_timeout(1500)
        await page.screenshot(path="/home/jules/verification/screenshots/wiki_modal.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
