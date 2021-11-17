import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class FrontendTest {
    private final Frontend tester = new Frontend();
    private WebDriver driver;

    @Before
    public void before() throws Exception {
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
        driver = new ChromeDriver(options);
    }
    @After
    public void after() throws Exception {
        driver.quit();
    }

    @Test
    public void invalidRecruiterEmailUnitTest() {
        Assertions.assertEquals(0, tester.invalidRecruiterTest(driver, "test@yahoo.com", "password"));
    }
    @Test
    public void invalidRecruiterPWUnitTest() {
        Assertions.assertEquals(0, tester.invalidRecruiterTest(driver, "recruiter@email.com", "wrongPassword"));
    }
    @Test
    public void recruiterFrontendUnitTest() {
        Assertions.assertEquals(0, tester.recruiterFrontendTest(driver, "recruiter@email.com", "password"));
    }
    @Test
    public void recruiterLogoutUnitTest() {
        Assertions.assertEquals(0, tester.recruiterLogoutTest(driver,"recruiter@email.com", "password"));
    }
    @Test
    public void invalidJobseekerEmailUnitTest() {
        Assertions.assertEquals(0, tester.invalidJobseekerTest(driver, "test@yahoo.com", "password"));
    }
    @Test
    public void invalidJobSeekerPWUnitTest() {
        Assertions.assertEquals(0, tester.invalidJobseekerTest(driver, "seeker@email.com", "wrongPassword"));
    }
    @Test
    public void jobseekerFrontendUnitTest() {
        Assertions.assertEquals(0, tester.jobseekerFrontendTest(driver, "seeker@email.com", "password"));
    }
    @Test
    public void jobseekerLogoutUnitTest() {
        Assertions.assertEquals(0, tester.jobseekerLogoutTest(driver, "seeker@email.com", "password"));
    }
    @Test
    public void jobSeekerSignUpUnitTest() {
        Assertions.assertEquals(0, tester.jobSeekerSignUpTest(driver));
    }
    @Test
    public void recruiterSignUpUnitTest() {
        Assertions.assertEquals(0, tester.recruiterSignUpTest(driver));
    }
}