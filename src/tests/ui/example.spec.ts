import { test, expect } from '@playwright/test';
import { ExamplePage } from '../../ui/pages/example.page';

test.describe('Example Test @ui', () => {
  test('should verify page heading', async ({ page }) => {
    const examplePage = new ExamplePage(page);
    await examplePage.goto();
    
    const heading = await examplePage.getHeadingText();
    expect(heading).toBe('Example Domain');
  });
});
