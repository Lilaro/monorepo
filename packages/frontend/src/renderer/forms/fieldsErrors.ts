export enum FieldErrors {
  Required = 'Required field',
  Whitespaces = 'Username cannot contain whitespaces'
}

export enum UsernameErrors {
  NameTooLong = 'Username must have less than 20 characters',
  WrongCharacter = 'Username must be lowercase and cannot contain any special characters'
}

export enum CommunityNameErrors {
  NameTooLong = 'Community name must have less than 20 characters',
  WrongCharacter = 'Community name must be lowercase and cannot contain any special characters'
}

export enum InviteLinkErrors {
  WrongCharacter = 'Please check your invitation code and try again'
}

export enum ChannelNameErrors {
  NameTooLong = 'Channel name must have less than 20 characters',
  WrongCharacter = 'Channel name cannot contain any special characters'
}
