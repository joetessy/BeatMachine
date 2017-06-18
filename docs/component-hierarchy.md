## Component Hierarchy

**PreAuthHomePageContainer**
  - AuthFormContainer

**AuthFormContainer**
 - SignInForm
 - CreateAccountForm

**HomeContainer**
 - NavContainer
 - TrackContainer
 - Sidebar
   - FollowSuggestionsBox
   - LikesBox
 - FooterPlayer

**ProfileContainer**
 - NavContainer
 - TrackContainer
 - PlaylistContainer
 - Sidebar
   - StatsBox
   - LikesBox
   - FollowingBox
 - FooterPlayer

**LikesPageContainer**
  - NavContainer
  - Track Container
  - FooterPlayer

**FollowsContainer**
  - NavContainer
  - FollowItem
  - FooterPlayer

**CommentsContainer**
 - NavContainer
 - CommentItem
 - FooterPlayer

**TrackPageContainer**
 - NavContainer
 - TrackContainer
 - CommentsContainer
   - CommentFormContainer
   - CommentItem
 - FooterPlayer

 **UploadFormContainer**


**NavbarContainer**
 - Search
 - UploadFormContainer
 - ProfileMenu
 - Notifications
 - Messages

**FooterPlayerContainer**
 - FooterPlayer

## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "PreAuthHomePageContainer"
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/stream"  | "HomeContainer"
| "/:userName" | "ProfileContainer" |
| "/:userName/:trackTitle" | "TrackPageContainer" |
| "/:artistName/likes/" | "LikesPageContainer" |
| "/:artistName/following" | "FollowsPageContainer" |
| "/:artistName/followers" | "FollowsPageContainer" |
| "/:artistName/comments" | "CommentsContainer" |
| "/upload" | "UploadFormContainer" |
