# Development Practices

**Step 1: Creating Branches for Contribution**

In order to contribute to the project, all developers should create branches following the specified naming convention. The branch naming convention should be as follows:

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

**Important: Do not push directly to the main branch!** It is crucial to avoid pushing changes directly to the main branch. Instead, always create a new branch for your work and submit a pull request when ready for code review and merging.

By following this naming convention, it becomes easier to track and manage tasks within the version control system.

Remember to communicate and coordinate with the team to avoid any naming conflicts.

**Step 2: Writing Commit Messages**

Having clear and informative commit messages is crucial for maintaining a well-documented and organized codebase. Follow these guidelines when writing commit messages:

- **Be Descriptive**: Provide a concise and descriptive summary of the changes made in the commit. The message should accurately convey the purpose and impact of the commit.

- **Use Imperative Verbs**: Write commit messages in the imperative mood. Start the message with a verb that describes what the commit does. For example, instead of saying "Fixed a bug," use "Fix bug" or "Update documentation."

- **Keep it Short**: Ideally, commit messages should be no longer than 50-72 characters in the subject line. If necessary, provide additional details in the body of the commit message, separating it from the subject line with a blank line.

- **Provide Context**: Include any relevant information or context in the commit message. Mention any related issues, tasks, or tickets associated with the commit.

- **Use Consistent Format**: Establish a consistent format for commit messages in our project. This could include using prefixes to indicate the type of commit (e.g., feat: for new features, fix: for bug fixes, docs: for documentation updates, etc.).

- **Avoid Ambiguity**: Be specific and avoid ambiguous language in your commit messages. Clearly state what was changed, added, or removed.

- **Proofread and Spell Check**: Double-check your commit messages for any spelling or grammatical errors. Clear and error-free messages enhance readability and professionalism.

By following these guidelines, we can maintain a well-documented history of our project, facilitate code reviews, and improve collaboration within the team.

Please ensure that every commit adheres to these guidelines.

**Step 3: Opening a Pull Request (PR)**

When you are ready to submit your work for review and merging, follow these guidelines for opening a pull request:

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
