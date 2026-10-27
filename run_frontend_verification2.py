from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    cwd = os.getcwd()
    page.goto(f"file://{cwd}/index.html")
    page.wait_for_timeout(2000)

    # Click continue game in lobby
    page.click("#continue-game-btn")
    page.wait_for_timeout(1000)

    # Click upgrade camp
    page.click("#upgrade-camp-btn")
    page.wait_for_timeout(1000)

    # Click the first hero in the grid
    page.locator("#camp-hero-grid > div").first.click()
    page.wait_for_timeout(1000)

    # Screenshot upgrade camp modal with hero selected
    page.screenshot(path="/home/jules/verification/screenshots/upgrade_camp_modal_hero.png")
    page.wait_for_timeout(500)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--use-gl=angle"])
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 480, 'height': 853}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
