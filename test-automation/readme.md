# Team Iron Man - Test Automation

## Frontend Tests
Frontend tests are written in Java with Selenium as multiple methods which are then ran sequentially. The tests are performed through the Chrome browser using Chrome driver.
### invalidRecruiterTest and invalidJobseekerTest
This test checks to see if the border for the email/password fields change to red and displays the invalid email or password message.
### recruiterFrontendTest
This test logs in an existing recruiter, checks for a dashboard element to make sure the website has navigated to the dashboard, checks for the job filter section by clicking a job filter, checks for the learn more option for a 
applicant by clicking learn more, and checks to see if the info for the applicant loads by checking for their email.
### jobseekerFrontendTest
This test logs in an existing jobseeker, checks for a dashboard element to make sure the website has navigated to the dashboard, checks for the learn more option in a job in queue by clicking learn more, it checks to see if the
job information is loaded by looking for the job title in the learn more page.
### jobseekerLogoutTest and recruiterLogoutTest
This test logs in an existing jobseeker/recruiter, checks for a dashboard element to make sure the website has navigated to the dashboard, clicks the name button to bring up the dropdown menu with logout option, clicks the logout option,
then checks for a landing page element to make sure it successfully logged the jobseeker/recruiter out and back to the landing page.
### jobseekerSignUpTest/recruiterSignUpTest
This goes through all the 2.x/3.x tests for jobseeker/recruiter sign up which includes...
1. Inputting valid information and checking, after navigating to the next step in the sign up process, that all fields in the new step are either blank or have their default values.
2. Inputting nothing and selecting submit then checking that all field borders are red and appropriate error messages are shown.
3. Inputting an invalid email missing a dot between website and com/net/etc (form email@websitecom) makes the email field border red and gives an error message pertaining to invalid email.
4. Inputting an invalid email missing the @ sign (form emailwebsite.com) makes the email field border red and gives an error message pertaining to invalid email.
5. Inputting an invalid email missing the com/net/etc portion (form email@website.) makes the email field border red and gives an error message pertaining to invalid email.
6. Inputting an invalid email with only a single character after the dot (form email@website.c) makes the email field border red and gives an error message pertaining to invalid email.
7. Inputting an invalid email missing characters before the @ sign (form @website.com) makes the email field border red and gives an error message pertaining to invalid email.
8. Inputting a password and then confirming with a password that does not match makes the confirm password border red and gives an error message pertaining to password not matching.

## Backend Tests
Backend tests are written as Postman collections and ran sequentially as listed in the collection through the collection run command.
### Jobposting-create-addSeeker-getJobposting-deleteJobposting
This collection when ran does the following...
1. creates a new job posting
2. gets all job postings and checks for the existence of the job created
3. adds a new applicant to the job posting
4. checks to see if the applicant is added to the job posting
5. deletes the job posting
6. checks to see if the job posting was successfully deleted
### Recruiter-create-createJob-deleteRecruiter
This collection when ran does the following...
1. creates a new recruiter
2. gets that specific recruiter
3. creates a new job posting using that specific recruiter
4. deletes the recruiter without deleting the job posting
5. checks to see if the specific recruiter was deleted successfully
6. checks to see if the job posting was deleted along with the recruiter
### Recruiter-create-get-delete
This collection when ran does the following...
1. Creates a new recruiter
2. Gets all recruiters and checks to see if the new recruiter is included in the results
3. Deletes the recruiter
4. Gets the specific recruiter to see if they were deleted successfully
### Recruiter-create-getSpecific-update-getSpecific-delete-getSpecific
This collection when ran does the following...
1. Creates a new recruiter
2. Gets specifically the new recruiter to see if they were added successfully
3. Updates the new recruiter information
4. Gets the specific new recruiter information again and checks to see if values were changed
5. Deletes the new recruiter
6. Gets the specific new recruiter again to see if they were deleted succesfully
