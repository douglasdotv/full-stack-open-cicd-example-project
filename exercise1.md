# Warming Up

Let’s say we have an application being developed in **Java**, a language well-suited for enterprise applications, web platforms and beyond. Its ecosystem is packed with tools that make setting up a Continuous Integration (CI) pipeline straightforward.

---

## Common CI Steps and Tools in Java

1. **Linting:**  
   Tools like [**Checkstyle**](https://checkstyle.sourceforge.io/), [**PMD**](https://pmd.github.io/) and [**SpotBugs**](https://spotbugs.github.io/) are great for linting. They’ll help enforce coding standards and flag issues before they become bigger problems.

2. **Testing:**  
   Testing is a critical part of CI. [**JUnit**](https://junit.org/junit5/) is the go-to framework for unit tests in Java and it pairs nicely with [**Mockito**](https://site.mockito.org/) for mocking dependencies in more complex scenarios. If we want to see how much of the code is actually tested, [**JaCoCo**](https://www.eclemma.org/jacoco/) is perfect for generating coverage reports.

3. **Building:**  
   For building Java applications, [**Maven**](https://maven.apache.org/) and [**Gradle**](https://gradle.org/) are the most common choices. They handle everything from managing dependencies to compiling and packaging the application and integrate easily with most CI platforms.

---

## CI Alternatives to Jenkins and GitHub Actions

If Jenkins or GitHub Actions don’t fit our needs, there are plenty of alternatives. Popular cloud-based options include [**Google Cloud Build**](https://cloud.google.com/cloud-build), [**Azure DevOps**](https://azure.microsoft.com/en-us/services/devops/) and [**AWS CodePipeline**](https://aws.amazon.com/codepipeline/), all tightly integrated with their ecosystems. [**GitLab CI/CD**](https://docs.gitlab.com/ee/ci/) is ideal for GitLab users. Other tools like [**Travis CI**](https://travis-ci.org/), [**CircleCI**](https://circleci.com/) and [**TeamCity**](https://www.jetbrains.com/teamcity/) offer flexibility for various workflows.

---

## Cloud-Based vs. Self-Hosted CI

Which environment is better depends on the team’s situation.

For most teams, a cloud-based setup is easier to manage. Platforms like GitHub Actions handle all the backend work. They’re also scalable, so they’re a good choice if a team wants to spend more time coding and less time dealing with servers.

On the other hand, if we’re dealing with sensitive data or have strict compliance needs, self-hosting makes sense. Everything is controlled, but the trade-off is managing and maintaining the infrastructure, which can get expensive and time-consuming.

When deciding between cloud-based and self-hosted, we must consider the following factors:

- How sensitive is the data our application handles?
- What’s the budget for infrastructure and ongoing maintenance?
- Do we need to scale quickly?
- How comfortable is the team with managing servers or complex CI systems?
