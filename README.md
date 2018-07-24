# PlaylistSyncServer
Server for serving the PlaylistSync app

## Purpose / problem to be solved
Handle intermittent requests to search musical providers and update / manage a user's playlists on said musical provider. Will also need to manage OAuth and user sessions.

## Planned architectural design
- Serverless (AWS lambda, Google Cloud functions?)
- Oauth strategies (with 3rd parties):
  - AWS options
    - Amazon Cognito?
    - Manual method (so I learn something)
      - Cache tokens in DynamoDB or ElastiCache
      - Server sends SNS message with a future timestamp indicating when to referesh the token
      - Cloudwatch listens to SNS message, triggers an event when that timestamp passes
  - Google Cloud options
    - Firebase Authentication?
    - Compute Engine vs Kubernetes engine vs App engine
    - Redis Cache vs Firebase
