from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    cwd = os.getcwd()
    page.goto(f"file://{cwd}/wiki.html")
    page.wait_for_timeout(2000)

    # Click heroes tab
    page.click("#tab-db")
    page.wait_for_timeout(1000)

    # Take screenshot of wiki hero db
    page.screenshot(path="/home/jules/verification/screenshots/wiki_db.png")
    page.wait_for_timeout(500)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--use-gl=angle"])
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 1280, 'height': 853}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
