import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;

import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "./src/Selenium/chromedriver");

        //Stuff to make selenium actually work
        //solution found at: https://stackoverflow.com/questions/50642308/webdriverexception-unknown-error-devtoolsactiveport-file-doesnt-exist-while-t
        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized");            // open Browser in maximized mode
        options.addArguments("disable-infobars");           // disabling infobars
        options.addArguments("--disable-extensions");       // disabling extensions
        options.addArguments("--disable-gpu");              // applicable to windows os only
        options.addArguments("--disable-dev-shm-usage");    // overcome limited resource problems
        options.addArguments("--no-sandbox");               // Bypass OS security model
        WebDriver driver = new ChromeDriver(options);

        invalidUserTest(driver);
        //System.out.println("Result: " + invalidUserTest(driver));
    }

    private static int invalidUserTest(WebDriver driver)
    {
        driver.get("http://localhost:3000/");
        WebElement element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/div[1]/button"));
        element.click();


        //Invalid user test (user doesn't exist)
        try {
            element = driver.findElement(By.xpath("//*[@id=\"email\"]"));        //Find input field
            element.sendKeys("test@yahoo.com");                    //Input an invalid email
            element = driver.findElement(By.xpath("//*[@id=\"password\"]"));    //Find password field
            element.sendKeys("password");                         //Input some password
            element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[3]/button"));
            element.click();

            //Wait 2 seconds for the page to update
            long end = System.currentTimeMillis() + 2000;
            while (System.currentTimeMillis() < end) {}

            //Another try/catch to throw a more useful exception
            try {
                element = driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div[2]/div/form/div[2]/div"));
            }
            catch(Exception e) {
                throw new Exception("FAIL: Invalid user test");
            }

            if (element != null)
                System.out.println("PASS: Invalid user test");
        }
        catch(Exception e)
        {
            System.out.println(e);
            driver.quit();
            return -1;
        }
        driver.quit();
        return 0;
    }
}
