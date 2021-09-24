/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStream = /* GraphQL */ `
  subscription OnCreateStream($owner: String!) {
    onCreateStream(owner: $owner) {
      id
      name
      notes {
        items {
          id
          streamID
          content
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStream = /* GraphQL */ `
  subscription OnUpdateStream($owner: String!) {
    onUpdateStream(owner: $owner) {
      id
      name
      notes {
        items {
          id
          streamID
          content
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStream = /* GraphQL */ `
  subscription OnDeleteStream($owner: String!) {
    onDeleteStream(owner: $owner) {
      id
      name
      notes {
        items {
          id
          streamID
          content
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
      id
      streamID
      streams {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      content
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
      id
      streamID
      streams {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      content
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
      id
      streamID
      streams {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      content
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
