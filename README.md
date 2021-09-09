## Hacker news (React+Redux) [DEMO](https://yas-7.github.io/hacker-news/)

Appllication consist of two pages:
  - Main page where you can browse the list of the last Hacker News
  - Detail page where you can view the news with its comments

### This project was implemented with RTK Query [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query).
Only loads the news that are visible on the screen.

News and comments are automatically refetched on a provided interval(60s). It's also possible to fetch them manually.

Root comments are loaded immediately on entering the page, nested comments - by clicking on the button. 
