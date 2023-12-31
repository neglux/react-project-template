# Developer Guideline

- [Version Control](#git-version-control)
- [Frontend Development Workflow](#frontend-development-workflow)
- [Meeting Guidelines](#meeting-guidelines)

## Git Version Control

This project utilizes Git for version control.

[Git in 100 Seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)

### Contribution Steps

**Step 1: Creating Branches**

In order to contribute to the project, all developers should create branches following the specified naming convention. The branch naming convention should be as follows:

> **Note:** All branches should be created from **dev** branch

Here are the details for each component of the branch name convention:

```
<taskType>/<taskNumber>_<briefDescription>
```

- `<taskType>`: The type of the task being worked on. It can be one of the following:

  - `bug`: For bug fixes.
  - `enhancement`: For enhancements or improvements to existing features.
  - `feature`: For the development of new features.

- `<taskNumber>`: Trello card number for the task. It helps in tracking and referencing the task.

- `<briefDescription>`: A brief and descriptive text summarizing the task.

For example, if a developer is working on an enhancement task with the task number 42 and the brief description "update user profile," the branch name should be:

```
enhancement/42_update-user-profile
```

> **Important: Do not push directly to the dev branch!** It is crucial to avoid pushing changes directly to the dev branch. Instead, always create a new branch from dev and submit a pull request when ready for code review and merging.

By following this naming convention, it becomes easier to track and manage tasks within the version control system.

Remember to communicate and coordinate with the team to avoid any naming conflicts.

**Step 2: Writing Commit Messages**

To commit your changes locally, use the following commands:

```bash
git add . #Add all modified files to the staging area
```

```bash
git commit -m "Commit message" # Commit the changes with a descriptive message
```

> **Note:** It is recommended to use the command line interface for Git operations instead of built-in IDE tools when commiting. This ensures compatibility with our Husky verification and pre-commit hooks. Please avoid using IDE-specific Git tools for a consistent development workflow.

Here are some examples of bad commit messages to avoid:

- "Fix bug"
- "Update code"
- "Changes"
- "Testing"
- "Attım tut"

Having clear and informative commit messages is crucial for maintaining a well-documented and organized codebase. Follow these guidelines when writing commit messages:

- **Be Descriptive**: Provide a concise and descriptive summary of the changes made in the commit. The message should accurately convey the purpose and impact of the commit.

- **Use Imperative Verbs**: Write commit messages in the imperative mood. Start the message with a verb that describes what the commit does.

- **Keep it Short**: Ideally, commit messages should be no longer than 50-72 characters in the subject line. If necessary, provide additional details in the body of the commit message, separating it from the subject line with a blank line.

- **Provide Context**: Include any relevant information or context in the commit message. Mention any related issues, tasks, or tickets associated with the commit.

- **Use Consistent Format**: Establish a consistent format for commit messages in our project. This could include using prefixes to indicate the type of commit (e.g., feat: for new features, fix: for bug fixes, docs: for documentation updates, etc.).

- **Avoid Ambiguity**: Be specific and avoid ambiguous language in your commit messages. Clearly state what was changed, added, or removed.

- **Proofread and Spell Check**: Double-check your commit messages for any spelling or grammatical errors. Clear and error-free messages enhance readability and professionalism.

By following these guidelines, we can maintain a well-documented history of our project, facilitate code reviews, and improve collaboration within the team.

Please ensure that every commit adheres to these guidelines.

**Step 3: Opening a Pull Request (PR)**

When you're ready to submit a new feature or bug fix, create a new branch following the branch naming convention mentioned earlier.

Push your branch to the remote repository and open a pull request (PR) targeting the appropriate branch (e.g., `dev`).

1. **Pull Request Title**: The title of the pull request should follow this format:

```
[<taskNumber>] <briefDescription>
```

For example, if you are working on a bug fix with task number 123 and the brief description is "Fix login form validation," the pull request title should be:

```
[123] Fix login form validation
```

2. **Labeling**: Assign the appropriate `<taskType>` label to the pull request. This ensures that the PR is categorized correctly based on the type of task being addressed (e.g., `bug`, `enhancement`, `feature`).

3. **PR State Label**: The pull request owner must add a label that indicates the state of the PR. There are two possible labels:
   - `Work in progress`: Use this label if the PR is still in progress and not ready for final review and merging.
   - `Ready to merge`: Apply this label when the PR is complete and ready for final review and merging.

![image](https://github.com/neglux/react-project-template/assets/90967608/735c04b1-9633-4e3c-bc8c-0658e8a6f158)

4. **Clear and Concise Description**: Provide a clear and concise description of the changes made in the pull request. Explain the problem being addressed, the solution implemented, and any considerations or side effects of the changes. Include relevant information that helps reviewers understand the context and purpose of the pull request.

By following these guidelines, it becomes easier for reviewers and team members to track, review, and manage pull requests effectively.

**Step 3: Sending for Code Review**

Code reviews play a crucial role in maintaining code quality, ensuring best practices, and fostering collaboration within our development team. Here's an overview of our code review process:

1. **Linting**: Upon opening a pull request, an automated linter will run to check for any coding style or formatting issues. If the linter fails, make the necessary corrections locally and push the changes to your branch. The linter should pass before requesting a code review.

2. **Conflict Resolution**: If there are conflicts with the target branch, reach out to the tech lead. They will assist you in resolving the conflicts and ensuring a smooth merge process.

3. **Code Review**: Once your pull request is ready for review, the reviewer will go through your code, providing feedback, suggestions, and identifying potential issues. Be responsive to the feedback and address any requested changes or improvements promptly.

4. **Collaborative Discussion**: Engage in a constructive and collaborative discussion with the reviewer. Ask questions, seek clarification, and discuss any areas of uncertainty or potential improvements. The goal is to ensure that the code meets the project's standards, best practices, and requirements.

5. **Iterative Refinement**: Make the necessary changes based on the feedback received during the code review. Update your branch, push the changes, and the pull request will be automatically updated. Notify the reviewer once the changes are made, and they will re-review the code.

**Step 4: Approval and Merge**

Once the reviewer approves the pull request and all requested changes have been addressed,A designated team lead will merge the code into the target branch.

> **Note:**: Never Merge Your Own Pull Requests.

## Frontend Development Workflow

### Prerequisites

Before you begin, please ensure that you have the following software installed on your machine:

- [Nodejs](https://www.youtube.com/watch?v=ENrzD9HAZK4)
- [Yarn](https://yarnpkg.com/)

### Getting Started

To set up the project, follow these steps:

1. Clone the project repository from GitHub.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install project dependencies:

```bash
yarn install
```

### Development Workflow

To start the development server and run the application locally, use the following commands:

```bash
yarn dev
```

This will launch the development server and open the application in your default browser.

> **Tip:** Any changes you make to the source code will trigger hot-reloading and automatically update the running application.

### Resources

Here are some resources to help you get started with the tools used in this project:

- [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)
- [Yarn Documentation](https://yarnpkg.com/getting-started/usage)
- [Vite in 100 Seconds](https://www.youtube.com/watch?v=KCrXgy8qtjM)

> **Note:** This project requires the use of Yarn as the package manager. Please make sure to use Yarn instead of other package managers (e.g., npm) throughout the development process.

### Mantine as UI Library

In our project, we utilize the Mantine UI library for frontend development.

[Mantine UI library documentation](https://ui.mantine.dev/).

The documentation provides detailed information on component usage, customization options, theming, and other valuable resources to help you utilize Mantine effectively in your frontend development.

### TypeScript

In our project, we utilize TypeScript as our programming language of choice for frontend and backend development.

[TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA).

TypeScript is a superset of JavaScript that adds static typing capabilities, providing enhanced tooling, improved code quality, and better developer productivity.

- **Type Safety:** TypeScript introduces static typing, which helps catch errors at compile-time and provides better code reliability.
- **Scalability and Maintainability:** TypeScript's static typing allows for better code organization, refactoring, and maintainability, especially in larger codebases.
- **Ecosystem and Community:** TypeScript has a large and active community, with extensive libraries and frameworks built specifically for TypeScript development.

> **Note:** `Avoid Any Type` Minimize the usage of the `any` type whenever possible. Instead, strive to define specific types or leverage TypeScript's built-in types and interfaces.

## Meeting Guidelines

### Daily Scrum Meets

The daily scrum meeting, also known as the daily stand-up, is a short and focused meeting that helps the team stay aligned and ensure progress towards project goals. Here are the key points and guidelines for our daily scrum meetings:

- **Be Punctual**: Arrive on time for the meeting to ensure everyone can start and finish promptly. Respect the time of your fellow team members.

- **Keep it Short**: The daily scrum meeting should be time-boxed to a maximum of 15 minutes. Each team member should provide a brief update on their progress and plans.

- **Answer Three Questions**: Share the following information during the meeting:

  1. What did you accomplish since the last meeting?
  2. What are you planning to work on today?
  3. Are there any obstacles or challenges you're facing?

- **Focus on Key Tasks**: Highlight the key tasks or user stories you're working on. Keep the discussion concise and relevant to the current sprint's goals.

- **Listen and Support**: Pay attention to what others share during their updates. Offer support, provide input when needed, and identify opportunities for collaboration or assistance.

- **Considerations**

  - **Avoid Detailed Problem Solving**: Avoid diving into detailed problem-solving discussions during the daily scrum meeting. If additional discussions are necessary, schedule them separately to avoid extending the meeting duration.

  - **Avoid One-on-One Conversations**: The daily scrum meeting is a team-wide update. Avoid engaging in one-on-one conversations or side discussions that exclude other team members.

  - **Avoid Long Status Updates**: Keep your updates concise and to the point. Avoid lengthy explanations or providing unnecessary details that can be discussed outside of the meeting.

  - **Latecomers**: Try to be present at the start of the meeting. If you're running late, join quietly and catch up without disrupting the flow of the meeting.

Remember, the daily scrum meeting is an opportunity to synchronize efforts, identify any impediments, and foster collaboration within the team. By adhering to these guidelines, we can maximize the effectiveness of our daily scrum meetings.

### Pair Programming

Pair programming is an effective way to promote learning, collaboration, and problem-solving within our team.

- **Initial Independent Effort**: Spend an initial period of focused effort on the problem independently, typically between 45 minutes to 1 hour, depending on the complexity of the task.

- **Assess Progress and Understanding**: After the initial independent effort, assess your progress and understanding of the problem. If you've made some progress but still need assistance or have specific questions, consider requesting a pair.

- **Recognizing Stuck Points**: If you encounter significant difficulties, struggle to make progress, or feel unsure about the best approach, feel comfortable requesting a pair sooner rather than later.

- **Encourage Frequent Communication**: Open communication is key. Ask questions, seek clarification, and share your challenges or concerns with the team.

Remember, the goal is to balance independent learning and problem-solving with collaboration and support. Don't hesitate to reach out for assistance when needed.
