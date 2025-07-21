import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  TimelessDate: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AirbyteConfigurationInput = {
  /** Linear export API key. */
  apiKey: Scalars['String']['input'];
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  __typename?: 'ApiKey';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The label of the API key. */
  label: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The API key value. */
  key: Scalars['String']['input'];
  /** The label for the API key. */
  label: Scalars['String']['input'];
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ApiKey;
};

export type ApiKeyPayload = {
  __typename?: 'ApiKeyPayload';
  /** The API key that was created. */
  apiKey: ApiKey;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Public information of the OAuth application. */
export type Application = {
  __typename?: 'Application';
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String']['output'];
  /** OAuth application's ID. */
  id: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Application name. */
  name: Scalars['String']['output'];
};

/** A generic payload return from entity archive or deletion mutations. */
export type ArchivePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  __typename?: 'ArchiveResponse';
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars['String']['output'];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float']['output'];
  /** Whether the dependencies for the model objects are included in the archive. */
  includesDependencies: Scalars['Boolean']['output'];
  /** The total number of entities in the archive. */
  totalCount: Scalars['Float']['output'];
};

/** Issue attachment (e.g. support ticket, pull request). */
export type Attachment = Node & {
  __typename?: 'Attachment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The creator of the attachment. */
  creator?: Maybe<User>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue this attachment belongs to. */
  issue: Issue;
  /** Custom metadata related to the attachment. */
  metadata: Scalars['JSONObject']['output'];
  /** Information about the source which created the attachment. */
  source?: Maybe<Scalars['JSONObject']['output']>;
  /** An accessor helper to source.type, defines the source type of the attachment. */
  sourceType?: Maybe<Scalars['String']['output']>;
  /** Content for the subtitle line in the Linear attachment widget. */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Content for the title line in the Linear attachment widget. */
  title: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Location of the attachment which is also used as an identifier. */
  url: Scalars['String']['output'];
};

/** A generic payload return from entity archive mutations. */
export type AttachmentArchivePayload = ArchivePayload & {
  __typename?: 'AttachmentArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Attachment>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Attachment collection filtering options. */
export type AttachmentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: InputMaybe<Array<AttachmentCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all attachments. */
  every?: InputMaybe<AttachmentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: InputMaybe<Array<AttachmentCollectionFilter>>;
  /** Filters that needs to be matched by some attachments. */
  some?: InputMaybe<AttachmentFilter>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<SourceTypeComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  edges: Array<AttachmentEdge>;
  nodes: Array<Attachment>;
  pageInfo: PageInfo;
};

export type AttachmentCreateInput = {
  /** Create a linked comment with markdown body. */
  commentBody?: InputMaybe<Scalars['String']['input']>;
  /** Create a linked comment with Prosemirror body. Please use `commentBody` instead */
  commentBodyData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Create attachment as a user with the provided name. This option is only available to OAuth applications creating attachments in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource?: InputMaybe<Scalars['Boolean']['input']>;
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue to associate the attachment with. */
  issueId: Scalars['String']['input'];
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The attachment title. */
  title: Scalars['String']['input'];
  /** Attachment location which is also used as an unique identifier for the attachment. If another attachment is created with the same `url` value, existing record is updated instead. */
  url: Scalars['String']['input'];
};

export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Attachment;
};

/** Attachment filtering options. */
export type AttachmentFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: InputMaybe<Array<AttachmentFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: InputMaybe<Array<AttachmentFilter>>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<SourceTypeComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentPayload = {
  __typename?: 'AttachmentPayload';
  /** The issue attachment that was created. */
  attachment: Attachment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type AttachmentSourcesPayload = {
  __typename?: 'AttachmentSourcesPayload';
  /** A unique list of all source types used in this workspace */
  sources: Scalars['JSONObject']['output'];
};

export type AttachmentUpdateInput = {
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The attachment title. */
  title: Scalars['String']['input'];
};

/** Workspace audit log entry object. */
export type AuditEntry = Node & {
  __typename?: 'AuditEntry';
  /** The user that caused the audit entry to be created. */
  actor?: Maybe<User>;
  /** The ID of the user that caused the audit entry to be created. */
  actorId?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Country code of request resulting to audit entry. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** IP from actor when entry was recorded. */
  ip?: Maybe<Scalars['String']['output']>;
  /** Additional metadata related to the audit entry. */
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  /** The organization the audit log belongs to. */
  organization?: Maybe<Organization>;
  /** Additional information related to the request which performed the action. */
  requestInformation?: Maybe<Scalars['JSONObject']['output']>;
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type AuditEntryConnection = {
  __typename?: 'AuditEntryConnection';
  edges: Array<AuditEntryEdge>;
  nodes: Array<AuditEntry>;
  pageInfo: PageInfo;
};

export type AuditEntryEdge = {
  __typename?: 'AuditEntryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: AuditEntry;
};

/** Audit entry filtering options. */
export type AuditEntryFilter = {
  /** Filters that the audit entry actor must satisfy. */
  actor?: InputMaybe<NullableUserFilter>;
  /** Comparator for the country code. */
  countryCode?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the IP address. */
  ip?: InputMaybe<StringComparator>;
  /** Comparator for the type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type AuditEntryType = {
  __typename?: 'AuditEntryType';
  /** Description of the audit entry type. */
  description: Scalars['String']['output'];
  /** The audit entry type. */
  type: Scalars['String']['output'];
};

/** [INTERNAL] An OAuth userId/createdDate tuple */
export type AuthMembership = {
  __typename?: 'AuthMembership';
  /** The date of the authorization */
  createdAt: Scalars['DateTime']['output'];
  /** The authorizing userId */
  userId: Scalars['String']['output'];
};

export type AuthResolverResponse = {
  __typename?: 'AuthResolverResponse';
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars['Boolean']['output']>;
  /** Organizations this account has access to, but is not yet a member. */
  availableOrganizations?: Maybe<Array<Organization>>;
  /** Email for the authenticated account. */
  email?: Maybe<Scalars['String']['output']>;
  /** User account ID. */
  id: Scalars['String']['output'];
  /** ID of the organization last accessed by the user. */
  lastUsedOrganizationId?: Maybe<Scalars['String']['output']>;
  /** JWT token for authentication of the account. */
  token?: Maybe<Scalars['String']['output']>;
  /** Users belonging to this account. */
  users: Array<User>;
};

/** [INTERNAL] Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  __typename?: 'AuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean']['output'];
};

/** Comparator for booleans. */
export type BooleanComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equals constraint. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A comment associated with an issue. */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The comment content in markdown format. */
  body: Scalars['String']['output'];
  /** The comment content as a Prosemirror document. */
  bodyData: Scalars['String']['output'];
  /** The children of the comment. */
  children: CommentConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  /** [ALPHA] The external user who wrote the comment. */
  externalUser?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that the comment is associated with. */
  issue: Issue;
  /** The parent comment under which the current comment is nested. */
  parent?: Maybe<Comment>;
  /** Emoji reaction summary, grouped by emoji type */
  reactionData: Scalars['JSONObject']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Comment's URL. */
  url: Scalars['String']['output'];
  /** The user who wrote the comment. */
  user?: Maybe<User>;
};


/** A comment associated with an issue. */
export type CommentChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Comment filtering options. */
export type CommentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentCollectionFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all comments. */
  every?: InputMaybe<CommentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<IssueFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentCollectionFilter>>;
  /** Filters that needs to be matched by some comments. */
  some?: InputMaybe<CommentFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  /** The comment content in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** Create comment as a user with the provided name. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  /** The date when the comment was created (e.g. if importing from another system). Must be a date in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Flag to prevent auto subscription to the issue the comment is created on. */
  doNotSubscribeToIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue to associate the comment with. */
  issueId: Scalars['String']['input'];
  /** The parent comment under which to nest a current comment. */
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Comment;
};

/** Comment filtering options. */
export type CommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<IssueFilter>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentPayload = {
  __typename?: 'CommentPayload';
  /** The comment that was created or updated. */
  comment: Comment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
};

/** A company related to issue's origin. */
export type Company = Node & {
  __typename?: 'Company';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Custom company properties. */
  companyProperties: Scalars['JSONObject']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who added the company. */
  creator: User;
  /** Company ID in an external system. */
  externalId: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Company logo URL. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Company name. */
  name: Scalars['String']['output'];
  /** The organization of the customer. */
  organization: Organization;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Company website URL. */
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  edges: Array<CompanyEdge>;
  nodes: Array<Company>;
  pageInfo: PageInfo;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Company;
};

export type ContactCreateInput = {
  /** User's browser information. */
  browser?: InputMaybe<Scalars['String']['input']>;
  /** User's Linear client information. */
  clientVersion?: InputMaybe<Scalars['String']['input']>;
  /** User's device information. */
  device?: InputMaybe<Scalars['String']['input']>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: InputMaybe<Scalars['Int']['input']>;
  /** The message the user sent. */
  message: Scalars['String']['input'];
  /** User's operating system. */
  operatingSystem?: InputMaybe<Scalars['String']['input']>;
  /** The type of support contact. */
  type: Scalars['String']['input'];
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** [INTERNAL] Input for sending a message to the Linear Sales team */
export type ContactSalesCreateInput = {
  /** Size of the company. */
  companySize?: InputMaybe<Scalars['String']['input']>;
  /** Work email of the person requesting information. */
  email: Scalars['String']['input'];
  /** The message the user sent. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Name of the person requesting information. */
  name: Scalars['String']['input'];
};

/** [Internal] Comparator for content. */
export type ContentComparator = {
  /** [Internal] Contains constraint. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] Not-contains constraint. */
  notContains?: InputMaybe<Scalars['String']['input']>;
};

export enum ContextViewType {
  ActiveCycle = 'activeCycle',
  ActiveIssues = 'activeIssues',
  Backlog = 'backlog',
  Triage = 'triage',
  UpcomingCycle = 'upcomingCycle'
}

export type CreateCsvExportReportPayload = {
  __typename?: 'CreateCsvExportReportPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CreateOrJoinOrganizationResponse = {
  __typename?: 'CreateOrJoinOrganizationResponse';
  organization: Organization;
  user: User;
};

export type CreateOrganizationInput = {
  /** Whether the organization should allow email domain access. */
  domainAccess?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the organization. */
  name: Scalars['String']['input'];
  /** The timezone of the organization, passed in by client. */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** The URL key of the organization. */
  urlKey: Scalars['String']['input'];
  /** JSON serialized UTM parameters associated with the creation of the workspace. */
  utm?: InputMaybe<Scalars['String']['input']>;
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  __typename?: 'CustomView';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the custom view. */
  creator: User;
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']['output']>;
  /** The filter applied to issues in the custom view. */
  filterData: Scalars['JSONObject']['output'];
  /**
   * The filters applied to issues in the custom view.
   * @deprecated Will be replaced by `filterData` in a future update
   */
  filters: Scalars['JSONObject']['output'];
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the custom view. */
  name: Scalars['String']['output'];
  /** The organization of the custom view. */
  organization: Organization;
  /** [ALPHA] The user who owns the custom view. */
  owner?: Maybe<User>;
  /** [ALPHA] The filter applied to projects in the custom view. */
  projectFilterData?: Maybe<Scalars['JSONObject']['output']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars['Boolean']['output'];
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [ALPHA] The user who last updated the custom view. */
  updatedBy: User;
};

export type CustomViewConnection = {
  __typename?: 'CustomViewConnection';
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewCreateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the custom view. */
  name: Scalars['String']['input'];
  /** The owner of the custom view. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** [ALPHA] The project filter applied to issues in the custom view. */
  projectFilterData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomViewEdge = {
  __typename?: 'CustomViewEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomView;
};

/** A custom view notification subscription. */
export type CustomViewNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'CustomViewNotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The custom view subscribed to. */
  customView: CustomView;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type CustomViewPayload = {
  __typename?: 'CustomViewPayload';
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CustomViewSuggestionPayload = {
  __typename?: 'CustomViewSuggestionPayload';
  /** The suggested view description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The suggested view icon. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The suggested view name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomViewUpdateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The name of the custom view. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The owner of the custom view. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** [ALPHA] The project filter applied to issues in the custom view. */
  projectFilterData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  __typename?: 'Cycle';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the cycle was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars['Float']['output']>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars['Float']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The cycle's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The end time of the cycle. */
  endsAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The number of in progress estimation points after each day. */
  inProgressScopeHistory: Array<Scalars['Float']['output']>;
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars['Float']['output']>;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of the cycle. */
  number: Scalars['Float']['output'];
  /** The overall progress of the cycle. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float']['output'];
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars['Float']['output']>;
  /** The start time of the cycle. */
  startsAt: Scalars['DateTime']['output'];
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type CycleArchivePayload = ArchivePayload & {
  __typename?: 'CycleArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CycleConnection = {
  __typename?: 'CycleConnection';
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleCreateInput = {
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The description of the cycle. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The end date of the cycle. */
  endsAt: Scalars['DateTime']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The start date of the cycle. */
  startsAt: Scalars['DateTime']['input'];
  /** The team to associate the cycle with. */
  teamId: Scalars['String']['input'];
};

export type CycleEdge = {
  __typename?: 'CycleEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Cycle;
};

/** Cycle filtering options. */
export type CycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the filtering active cycle. */
  isActive?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering future cycles. */
  isFuture?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering next cycle. */
  isNext?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering past cycles. */
  isPast?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: InputMaybe<BooleanComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A cycle notification subscription. */
export type CycleNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'CycleNotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The cycle subscribed to. */
  cycle: Cycle;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type CyclePayload = {
  __typename?: 'CyclePayload';
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CycleUpdateInput = {
  /** The end date of the cycle. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The description of the cycle. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The end date of the cycle. */
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The start date of the cycle. */
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Comparator for dates. */
export type DateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** The day of the week. */
export enum Day {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars['String']['input'];
};

/** A generic payload return from entity deletion mutations. */
export type DeletePayload = ArchivePayload & {
  __typename?: 'DeletePayload';
  /** The identifier of the deleted entity. */
  entityId: Scalars['String']['output'];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A document for a project. */
export type Document = Node & {
  __typename?: 'Document';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']['output']>;
  /** The document content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /** The document content as JSON. */
  contentData?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the document. */
  creator: User;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project that the document is associated with. */
  project: Project;
  /** The document's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The document title. */
  title: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who last updated the document. */
  updatedBy: User;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  edges: Array<DocumentEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
};

/** A document content for a project. */
export type DocumentContent = Node & {
  __typename?: 'DocumentContent';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The document content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /** The document content as JSON. */
  contentData?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that the document is associated with. */
  issue?: Maybe<Issue>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type DocumentCreateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Related project for the document. */
  projectId: Scalars['String']['input'];
  /** The title of the document. */
  title: Scalars['String']['input'];
};

export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Document;
};

export type DocumentPayload = {
  __typename?: 'DocumentPayload';
  /** The document that was created or updated. */
  document: Document;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type DocumentSearchPayload = {
  __typename?: 'DocumentSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<DocumentSearchResultEdge>;
  nodes: Array<DocumentSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float']['output'];
};

export type DocumentSearchResult = Node & {
  __typename?: 'DocumentSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']['output']>;
  /** The document content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /** The document content as JSON. */
  contentData?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the document. */
  creator: User;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Metadata related to search result */
  metadata: Scalars['JSONObject']['output'];
  /** The project that the document is associated with. */
  project: Project;
  /** The document's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The document title. */
  title: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who last updated the document. */
  updatedBy: User;
};

export type DocumentSearchResultConnection = {
  __typename?: 'DocumentSearchResultConnection';
  edges: Array<DocumentSearchResultEdge>;
  nodes: Array<DocumentSearchResult>;
  pageInfo: PageInfo;
};

export type DocumentSearchResultEdge = {
  __typename?: 'DocumentSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: DocumentSearchResult;
};

export type DocumentUpdateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Related project for the document. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The title of the document. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EmailSubscribeInput = {
  /** [INTERNAL] Email to subscribe. */
  email: Scalars['String']['input'];
};

export type EmailSubscribePayload = {
  __typename?: 'EmailSubscribePayload';
  /** [INTERNAL] Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type EmailUnsubscribeInput = {
  /** The user's email validation token. */
  token: Scalars['String']['input'];
  /** Email type to unsubscribed from. */
  type: Scalars['String']['input'];
  /** The identifier of the user. */
  userId: Scalars['String']['input'];
};

export type EmailUnsubscribePayload = {
  __typename?: 'EmailUnsubscribePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type EmailUserAccountAuthChallengeInput = {
  /** Auth code for the client initiating the sequence. */
  clientAuthCode?: InputMaybe<Scalars['String']['input']>;
  /** The email for which to generate the magic login code. */
  email: Scalars['String']['input'];
  /** Whether the login was requested from the desktop app. */
  isDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']['input']>;
};

export type EmailUserAccountAuthChallengeResponse = {
  __typename?: 'EmailUserAccountAuthChallengeResponse';
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars['String']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Information for creating embedded content for the provided URL */
export type Embed = {
  __typename?: 'Embed';
  /**  The name of the author/owner of the resource */
  authorName?: Maybe<Scalars['String']['output']>;
  /** The description of the content */
  description?: Maybe<Scalars['String']['output']>;
  /** The height of embedded content (photo, video, rich) */
  height?: Maybe<Scalars['Float']['output']>;
  /** The HTML (video, rich) */
  html?: Maybe<Scalars['String']['output']>;
  /** The name of the provider */
  providerName?: Maybe<Scalars['String']['output']>;
  /** The height of the thumbnail preview image */
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  /** The URL of the thumbnail preview image */
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  /** The width of the thumbnail preview image */
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
  /** Title for the returned embed view */
  title?: Maybe<Scalars['String']['output']>;
  /** The type of embed */
  type: Scalars['String']['output'];
  /** The asset URL (photo) */
  url?: Maybe<Scalars['String']['output']>;
  /** The width of embedded content (photo, video, rich) */
  width?: Maybe<Scalars['Float']['output']>;
};

export type EmbedPayload = {
  __typename?: 'EmbedPayload';
  /** Embed information */
  embed?: Maybe<Embed>;
  /** Whether the query was successful */
  success: Scalars['Boolean']['output'];
};

/** A custom emoji. */
export type Emoji = Node & {
  __typename?: 'Emoji';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the emoji. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The emoji's name. */
  name: Scalars['String']['output'];
  /** The organization that the emoji belongs to. */
  organization: Organization;
  /** The source of the emoji. */
  source: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The emoji image URL. */
  url: Scalars['String']['output'];
};

export type EmojiConnection = {
  __typename?: 'EmojiConnection';
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the custom emoji. */
  name: Scalars['String']['input'];
  /** The URL for the emoji. */
  url: Scalars['String']['input'];
};

export type EmojiEdge = {
  __typename?: 'EmojiEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Emoji;
};

export type EmojiPayload = {
  __typename?: 'EmojiPayload';
  /** The emoji that was created. */
  emoji: Emoji;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A basic entity. */
export type Entity = {
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Comparator for estimates. */
export type EstimateComparator = {
  /** Compound filters, one of which need to be matched by the estimate. */
  and?: InputMaybe<Array<NullableNumberComparator>>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, all of which need to be matched by the estimate. */
  or?: InputMaybe<Array<NullableNumberComparator>>;
};

/** [ALPHA] An external authenticated (e.g., through Slack) user which doesn't have a Linear account, but can create and update entities in Linear from the external system that authenticated them. */
export type ExternalUser = Node & {
  __typename?: 'ExternalUser';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** An URL to the external user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The external user's display name. Unique within each organization. Can match the display name of an actual user. */
  displayName: Scalars['String']['output'];
  /** The external user's email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The last time the external user was seen interacting with Linear. */
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  /** The external user's full name. */
  name: Scalars['String']['output'];
  /** Organization the external user belongs to. */
  organization: Organization;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type ExternalUserConnection = {
  __typename?: 'ExternalUserConnection';
  edges: Array<ExternalUserEdge>;
  nodes: Array<ExternalUser>;
  pageInfo: PageInfo;
};

export type ExternalUserEdge = {
  __typename?: 'ExternalUserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ExternalUser;
};

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  __typename?: 'Favorite';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the favorite. Only applies to favorites of type folder. */
  children: FavoriteConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The favorited custom view. */
  customView?: Maybe<CustomView>;
  /** The favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** The favorited document. */
  document?: Maybe<Document>;
  /** The name of the folder. Only applies to favorites of type folder. */
  folderName?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The favorited issue. */
  issue?: Maybe<Issue>;
  /** The favorited label. */
  label?: Maybe<IssueLabel>;
  /** The owner of the favorite. */
  owner: User;
  /** The parent folder of the favorite. */
  parent?: Maybe<Favorite>;
  /** The team of the favorited predefined view. */
  predefinedViewTeam?: Maybe<Team>;
  /** The type of favorited predefined view. */
  predefinedViewType?: Maybe<Scalars['String']['output']>;
  /** The favorited project. */
  project?: Maybe<Project>;
  /** The favorited team of the project. */
  projectTeam?: Maybe<Team>;
  /** The favorited roadmap. */
  roadmap?: Maybe<Roadmap>;
  /** The order of the item in the favorites list. */
  sortOrder: Scalars['Float']['output'];
  /** The type of the favorite. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The favorited user. */
  user?: Maybe<User>;
};


/** User favorites presented in the sidebar. */
export type FavoriteChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type FavoriteConnection = {
  __typename?: 'FavoriteConnection';
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteCreateInput = {
  /** The identifier of the custom view to favorite. */
  customViewId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the cycle to favorite. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the document to favorite. */
  documentId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']['input']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the issue to favorite. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the label to favorite. */
  labelId?: InputMaybe<Scalars['String']['input']>;
  /** The parent folder of the favorite. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of team for the predefined view to favorite. */
  predefinedViewTeamId?: InputMaybe<Scalars['String']['input']>;
  /** The type of the predefined view to favorite. */
  predefinedViewType?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project to favorite. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project team to favorite. */
  projectTeamId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the roadmap to favorite. */
  roadmapId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier of the user to favorite. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type FavoriteEdge = {
  __typename?: 'FavoriteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Favorite;
};

export type FavoritePayload = {
  __typename?: 'FavoritePayload';
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type FavoriteUpdateInput = {
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']['input']>;
  /** The identifier (in UUID v4 format) of the folder to move the favorite under. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

/** Object representing Figma preview information. */
export type FigmaEmbed = {
  __typename?: 'FigmaEmbed';
  /** Date when the file was updated at the time of embedding. */
  lastModified: Scalars['DateTime']['output'];
  /** Figma file name. */
  name: Scalars['String']['output'];
  /** Node name. */
  nodeName?: Maybe<Scalars['String']['output']>;
  /** Figma screenshot URL. */
  url?: Maybe<Scalars['String']['output']>;
};

export type FigmaEmbedPayload = {
  __typename?: 'FigmaEmbedPayload';
  /** Figma embed information. */
  figmaEmbed?: Maybe<FigmaEmbed>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A schedule for a team's first responder. */
export type FirstResponderSchedule = Node & {
  __typename?: 'FirstResponderSchedule';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The integration used for scheduling. */
  integration: Integration;
  /** The id of the integration schedule used for scheduling. */
  integrationScheduleId?: Maybe<Scalars['String']['output']>;
  /** The current schedule and available schedules. */
  scheduleData: Scalars['JSONObject']['output'];
  /** The team to which the schedule belongs to. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type FirstResponderScheduleConnection = {
  __typename?: 'FirstResponderScheduleConnection';
  edges: Array<FirstResponderScheduleEdge>;
  nodes: Array<FirstResponderSchedule>;
  pageInfo: PageInfo;
};

export type FirstResponderScheduleEdge = {
  __typename?: 'FirstResponderScheduleEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: FirstResponderSchedule;
};

export type FrontAttachmentPayload = {
  __typename?: 'FrontAttachmentPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Front specific settings. */
export type FrontSettings = {
  __typename?: 'FrontSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']['output']>;
};

export type FrontSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GitHubCommitIntegrationPayload = {
  __typename?: 'GitHubCommitIntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The webhook secret to provide to GitHub. */
  webhookSecret: Scalars['String']['output'];
};

/** Metadata and settings for a GitHub integration. */
export type GitHubSettings = {
  __typename?: 'GitHubSettings';
  /** The avatar URL for the GitHub organization */
  orgAvatarUrl: Scalars['String']['output'];
  /** The GitHub organization's name */
  orgLogin: Scalars['String']['output'];
};

export type GitHubSettingsInput = {
  /** The avatar URL for the GitHub organization */
  orgAvatarUrl: Scalars['String']['input'];
  /** The GitHub organization's name */
  orgLogin: Scalars['String']['input'];
};

/** GitHub OAuth token, plus information about the organizations the user is a member of. */
export type GithubOAuthTokenPayload = {
  __typename?: 'GithubOAuthTokenPayload';
  /** A list of the GitHub organizations the user is a member of with attached repositories. */
  organizations?: Maybe<Array<GithubOrg>>;
  /** The OAuth token if the operation to fetch it was successful. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Relevant information for the GitHub organization. */
export type GithubOrg = {
  __typename?: 'GithubOrg';
  /** GitHub organization id. */
  id: Scalars['String']['output'];
  /** Whether or not this org is the user's personal repositories. */
  isPersonal?: Maybe<Scalars['Boolean']['output']>;
  /** The login for the GitHub organization. */
  login: Scalars['String']['output'];
  /** The name of the GitHub organization. */
  name: Scalars['String']['output'];
  /** Repositories that the organization owns. */
  repositories: Array<GithubRepo>;
};

/** Relevant information for the GitHub repository. */
export type GithubRepo = {
  __typename?: 'GithubRepo';
  /** The id of the GitHub repository. */
  id: Scalars['String']['output'];
  /** The name of the GitHub repository. */
  name: Scalars['String']['output'];
};

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  __typename?: 'GoogleSheetsSettings';
  sheetId: Scalars['Float']['output'];
  spreadsheetId: Scalars['String']['output'];
  spreadsheetUrl: Scalars['String']['output'];
  updatedIssuesAt: Scalars['DateTime']['output'];
};

export type GoogleSheetsSettingsInput = {
  sheetId: Scalars['Float']['input'];
  spreadsheetId: Scalars['String']['input'];
  spreadsheetUrl: Scalars['String']['input'];
  updatedIssuesAt: Scalars['DateTime']['input'];
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars['String']['input'];
  /** The URI to redirect the user to. */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String']['input'];
};

/** Comparator for identifiers. */
export type IdComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ImageUploadFromUrlPayload = {
  __typename?: 'ImageUploadFromUrlPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The URL containing the image. */
  url?: Maybe<Scalars['String']['output']>;
};

/** An integration with an external service. */
export type Integration = Node & {
  __typename?: 'Integration';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user that added the integration. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The integration's type. */
  service: Scalars['String']['output'];
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IntegrationConnection = {
  __typename?: 'IntegrationConnection';
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  __typename?: 'IntegrationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Integration;
};

export type IntegrationPayload = {
  __typename?: 'IntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IntegrationRequestInput = {
  /** Email associated with the request. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Name of the requested integration. */
  name: Scalars['String']['input'];
};

export type IntegrationRequestPayload = {
  __typename?: 'IntegrationRequestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The integration resource's settings */
export type IntegrationSettings = {
  __typename?: 'IntegrationSettings';
  front?: Maybe<FrontSettings>;
  gitHub?: Maybe<GitHubSettings>;
  googleSheets?: Maybe<GoogleSheetsSettings>;
  intercom?: Maybe<IntercomSettings>;
  jira?: Maybe<JiraSettings>;
  notion?: Maybe<NotionSettings>;
  pagerDuty?: Maybe<PagerDutySettings>;
  sentry?: Maybe<SentrySettings>;
  slackOrgProjectUpdatesPost?: Maybe<SlackPostSettings>;
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
  zendesk?: Maybe<ZendeskSettings>;
};

export type IntegrationSettingsInput = {
  front?: InputMaybe<FrontSettingsInput>;
  gitHub?: InputMaybe<GitHubSettingsInput>;
  googleSheets?: InputMaybe<GoogleSheetsSettingsInput>;
  intercom?: InputMaybe<IntercomSettingsInput>;
  jira?: InputMaybe<JiraSettingsInput>;
  notion?: InputMaybe<NotionSettingsInput>;
  pagerDuty?: InputMaybe<PagerDutyInput>;
  sentry?: InputMaybe<SentrySettingsInput>;
  slackOrgProjectUpdatesPost?: InputMaybe<SlackPostSettingsInput>;
  slackPost?: InputMaybe<SlackPostSettingsInput>;
  slackProjectPost?: InputMaybe<SlackPostSettingsInput>;
  zendesk?: InputMaybe<ZendeskSettingsInput>;
};

/** Join table between templates and integrations */
export type IntegrationTemplate = Node & {
  __typename?: 'IntegrationTemplate';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The integration that the template is associated with. */
  integration: Integration;
  /** The template that the integration is associated with. */
  template: Template;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IntegrationTemplateConnection = {
  __typename?: 'IntegrationTemplateConnection';
  edges: Array<IntegrationTemplateEdge>;
  nodes: Array<IntegrationTemplate>;
  pageInfo: PageInfo;
};

export type IntegrationTemplateCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the integration. */
  integrationId: Scalars['String']['input'];
  /** The identifier of the template. */
  templateId: Scalars['String']['input'];
};

export type IntegrationTemplateEdge = {
  __typename?: 'IntegrationTemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IntegrationTemplate;
};

export type IntegrationTemplatePayload = {
  __typename?: 'IntegrationTemplatePayload';
  /** The IntegrationTemplate that was created or updated. */
  integrationTemplate: IntegrationTemplate;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The configuration of all integrations for a project or a team. */
export type IntegrationsSettings = Node & {
  __typename?: 'IntegrationsSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Project which those settings apply to. */
  project?: Maybe<Project>;
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when an SLA is breached */
  slackIssueSlaBreached?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when an SLA is at high risk */
  slackIssueSlaHighRisk?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a new project update to team Slack channels. */
  slackProjectUpdateCreatedToTeam?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a new project update to workspace Slack channel. */
  slackProjectUpdateCreatedToWorkspace?: Maybe<Scalars['Boolean']['output']>;
  /** Team which those settings apply to. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IntegrationsSettingsConnection = {
  __typename?: 'IntegrationsSettingsConnection';
  edges: Array<IntegrationsSettingsEdge>;
  nodes: Array<IntegrationsSettings>;
  pageInfo: PageInfo;
};

export type IntegrationsSettingsCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project to create settings for. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to receive notification when an SLA has breached on Slack. */
  slackIssueSlaBreached?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when an SLA is at high risk */
  slackIssueSlaHighRisk?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to team channels. */
  slackProjectUpdateCreatedToTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to workspace channel. */
  slackProjectUpdateCreatedToWorkspace?: InputMaybe<Scalars['Boolean']['input']>;
  /** The identifier of the team to create settings for. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type IntegrationsSettingsEdge = {
  __typename?: 'IntegrationsSettingsEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IntegrationsSettings;
};

export type IntegrationsSettingsPayload = {
  __typename?: 'IntegrationsSettingsPayload';
  /** The settings that were created or updated. */
  integrationsSettings: IntegrationsSettings;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IntegrationsSettingsUpdateInput = {
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to receive notification when an SLA has breached on Slack. */
  slackIssueSlaBreached?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when an SLA is at high risk */
  slackIssueSlaHighRisk?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to team channels. */
  slackProjectUpdateCreatedToTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to workspace channel. */
  slackProjectUpdateCreatedToWorkspace?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Intercom specific settings. */
export type IntercomSettings = {
  __typename?: 'IntercomSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']['output']>;
};

export type IntercomSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An issue. */
export type Issue = Node & {
  __typename?: 'Issue';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float']['output'];
  /** Suggested branch name for the issue. */
  branchName: Scalars['String']['output'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int']['output'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /** [Internal] The issue's description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']['output']>;
  /** [ALPHA] The external user who created the issue. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** The users favorite associated with this issue. */
  favorite?: Maybe<Favorite>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String']['output'];
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The issue's unique number. */
  number: Scalars['Float']['output'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']['output']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Float']['output'];
  /** Label for the priority. */
  priorityLabel: Scalars['String']['output'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** The projectMilestone that the issue is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** [Internal] The time at which the issue's SLA will breach. */
  slaBreachesAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] The time at which the issue's SLA began. */
  slaStartedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue entered triage. */
  startedTriageAt?: Maybe<Scalars['DateTime']['output']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']['output']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String']['output'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the issue left triage. */
  triagedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Issue URL. */
  url: Scalars['String']['output'];
};


/** An issue. */
export type IssueAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueSubscribersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type IssueArchivePayload = ArchivePayload & {
  __typename?: 'IssueArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueBatchPayload = {
  __typename?: 'IssueBatchPayload';
  /** The issues that were updated. */
  issues: Array<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Issue filtering options. */
export type IssueCollectionFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueCollectionFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Filters that needs to be matched by all issues. */
  every?: InputMaybe<IssueFilter>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueCollectionFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that needs to be matched by some issues. */
  some?: InputMaybe<IssueFilter>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueCreateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']['input']>;
  /** Create issue as a user with the provided name. This option is only available to OAuth applications creating issues in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  /** The date when the issue was created (e.g. if importing from another system). Must be a date in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']['input']>;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** The comment the issue is referencing. */
  referenceCommentId?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The timestamp at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId: Scalars['String']['input'];
  /** The identifier of a template the issue should be created from. If other values are provided in the input, they will override template values. */
  templateId?: InputMaybe<Scalars['String']['input']>;
  /** The title of the issue. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** [Internal] A draft issue. */
export type IssueDraft = Node & {
  __typename?: 'IssueDraft';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user assigned to the draft. */
  assigneeId?: Maybe<Scalars['String']['output']>;
  /** Serialized array of JSONs representing attachments. */
  attachments: Scalars['JSONObject']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the draft. */
  creator: User;
  /** The cycle associated with the draft. */
  cycleId?: Maybe<Scalars['String']['output']>;
  /** The draft's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /** [Internal] The draft's description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** The date at which the issue would be due. */
  dueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The estimate of the complexity of the draft. */
  estimate?: Maybe<Scalars['Float']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The parent draft of the draft. */
  parent?: Maybe<IssueDraft>;
  /** The parent issue of the draft. */
  parentIssue?: Maybe<Issue>;
  /** The priority of the draft. */
  priority: Scalars['Float']['output'];
  /** Label for the priority. */
  priorityLabel: Scalars['String']['output'];
  /** The project associated with the draft. */
  projectId?: Maybe<Scalars['String']['output']>;
  /** The project milestone associated with the draft. */
  projectMilestoneId?: Maybe<Scalars['String']['output']>;
  /** The workflow state associated with the draft. */
  stateId: Scalars['String']['output'];
  /** The order of items in the sub-draft list. Only set if the draft has `parent` set. */
  subIssueSortOrder?: Maybe<Scalars['Float']['output']>;
  /** The team associated with the draft. */
  teamId: Scalars['String']['output'];
  /** The draft's title. */
  title: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Issue;
};

/** Issue filtering options. */
export type IssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueFilterSuggestionPayload = {
  __typename?: 'IssueFilterSuggestionPayload';
  /** The json filter that is suggested. */
  filter?: Maybe<Scalars['JSONObject']['output']>;
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  __typename?: 'IssueHistory';
  /** The user who made these changes. If null, possibly means that the change made by an integration. */
  actor?: Maybe<User>;
  /** The id of user who made these changes. If null, possibly means that the change made by an integration. */
  actorId?: Maybe<Scalars['String']['output']>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Whether the issue is archived at the time of this history entry. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The linked attachment. */
  attachment?: Maybe<Attachment>;
  /** The id of linked attachment. */
  attachmentId?: Maybe<Scalars['String']['output']>;
  /** Whether the issue was auto-archived. */
  autoArchived?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the issue was auto-closed. */
  autoClosed?: Maybe<Scalars['Boolean']['output']>;
  /** [Internal] Serialized JSON representing changes for certain non-relational properties. */
  changes?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user from whom the issue was re-assigned from. */
  fromAssignee?: Maybe<User>;
  /** The id of user from whom the issue was re-assigned from. */
  fromAssigneeId?: Maybe<Scalars['String']['output']>;
  /** The previous cycle of the issue. */
  fromCycle?: Maybe<Cycle>;
  /** The id of previous cycle of the issue. */
  fromCycleId?: Maybe<Scalars['String']['output']>;
  /** What the due date was changed from */
  fromDueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars['Float']['output']>;
  /** The previous parent of the issue. */
  fromParent?: Maybe<Issue>;
  /** The id of previous parent of the issue. */
  fromParentId?: Maybe<Scalars['String']['output']>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars['Float']['output']>;
  /** The previous project of the issue. */
  fromProject?: Maybe<Project>;
  /** The id of previous project of the issue. */
  fromProjectId?: Maybe<Scalars['String']['output']>;
  /** The previous workflow state of the issue. */
  fromState?: Maybe<WorkflowState>;
  /** The id of previous workflow state of the issue. */
  fromStateId?: Maybe<Scalars['String']['output']>;
  /** The team from which the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** The id of team from which the issue was moved from. */
  fromTeamId?: Maybe<Scalars['String']['output']>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that was changed. */
  issue: Issue;
  /** The import record. */
  issueImport?: Maybe<IssueImport>;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<IssueRelationHistoryPayload>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The user to whom the issue was assigned to. */
  toAssignee?: Maybe<User>;
  /** The id of user to whom the issue was assigned to. */
  toAssigneeId?: Maybe<Scalars['String']['output']>;
  /** The new project created from the issue. */
  toConvertedProject?: Maybe<Project>;
  /** The id of new project created from the issue. */
  toConvertedProjectId?: Maybe<Scalars['String']['output']>;
  /** The new cycle of the issue. */
  toCycle?: Maybe<Cycle>;
  /** The id of new cycle of the issue. */
  toCycleId?: Maybe<Scalars['String']['output']>;
  /** What the due date was changed to */
  toDueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars['Float']['output']>;
  /** The new parent of the issue. */
  toParent?: Maybe<Issue>;
  /** The id of new parent of the issue. */
  toParentId?: Maybe<Scalars['String']['output']>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars['Float']['output']>;
  /** The new project of the issue. */
  toProject?: Maybe<Project>;
  /** The id of new project of the issue. */
  toProjectId?: Maybe<Scalars['String']['output']>;
  /** The new workflow state of the issue. */
  toState?: Maybe<WorkflowState>;
  /** The id of new workflow state of the issue. */
  toStateId?: Maybe<Scalars['String']['output']>;
  /** The team to which the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** The id of team to which the issue was moved to. */
  toTeamId?: Maybe<Scalars['String']['output']>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars['String']['output']>;
  /** Whether the issue was trashed or un-trashed. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars['Boolean']['output']>;
};

export type IssueHistoryConnection = {
  __typename?: 'IssueHistoryConnection';
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  __typename?: 'IssueHistoryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueHistory;
};

/** An import job for data from an external service */
export type IssueImport = Node & {
  __typename?: 'IssueImport';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The id for the user that started the job. */
  creatorId: Scalars['String']['output'];
  /** File URL for the uploaded CSV for the import, if there is one. */
  csvFileUrl?: Maybe<Scalars['String']['output']>;
  /** User readable error message, if one has occurred during the import. */
  error?: Maybe<Scalars['String']['output']>;
  /** Error code and metadata, if one has occurred during the import */
  errorMetadata?: Maybe<Scalars['JSONObject']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The data mapping configuration for the import job. */
  mapping?: Maybe<Scalars['JSONObject']['output']>;
  /** Current step progress in % (0-100). */
  progress?: Maybe<Scalars['Float']['output']>;
  /** The service from which data will be imported. */
  service: Scalars['String']['output'];
  /** The status for the import job. */
  status: Scalars['String']['output'];
  /** New team's name in cases when teamId not set */
  teamName?: Maybe<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueImportCheckPayload = {
  __typename?: 'IssueImportCheckPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueImportDeletePayload = {
  __typename?: 'IssueImportDeletePayload';
  /** The import job that was deleted. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Issue import mapping input */
export type IssueImportMappingInput = {
  /** The mapping configuration for epics */
  epics?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The mapping configuration for users */
  users?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The mapping configuration for workflow states */
  workflowStates?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type IssueImportPayload = {
  __typename?: 'IssueImportPayload';
  /** The import job that was created or updated. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueImportUpdateInput = {
  /** The mapping configuration for the import. */
  mapping: Scalars['JSONObject']['input'];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  __typename?: 'IssueLabel';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the label. */
  children: IssueLabelConnection;
  /** The label's color as a HEX string. */
  color: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** The label's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether this label is considered to be a group. */
  isGroup: Scalars['Boolean']['output'];
  /** Issues associated with the label. */
  issues: IssueConnection;
  /** The label's name. */
  name: Scalars['String']['output'];
  /** @deprecated Workspace labels are identified by their team being null. */
  organization: Organization;
  /** The parent label. */
  parent?: Maybe<IssueLabel>;
  /** The team that the label is associated with. If null, the label is associated with the global workspace. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** Labels that can be associated with issues. */
export type IssueLabelChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Issue label filtering options. */
export type IssueLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all issue labels. */
  every?: InputMaybe<IssueLabelFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelCollectionFilter>>;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: InputMaybe<IssueLabelFilter>;
  /** Filters that needs to be matched by some issue labels. */
  some?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<NullableTeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelConnection = {
  __typename?: 'IssueLabelConnection';
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelCreateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the label. */
  name: Scalars['String']['input'];
  /** The identifier of the parent label. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The team associated with the label. If not given, the label will be associated with the entire workspace. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type IssueLabelEdge = {
  __typename?: 'IssueLabelEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueLabel;
};

/** Issue label filtering options. */
export type IssueLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelFilter>>;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<NullableTeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelPayload = {
  __typename?: 'IssueLabelPayload';
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueLabelUpdateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the label. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the parent label. */
  parentId?: InputMaybe<Scalars['String']['input']>;
};

/** An issue related notification */
export type IssueNotification = Entity & Node & Notification & {
  __typename?: 'IssueNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The comment related to the notification. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue related to the notification. */
  issue: Issue;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** The team related to the notification. */
  team: Team;
  /** Notification type */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that received the notification. */
  user: User;
};

export type IssuePayload = {
  __typename?: 'IssuePayload';
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssuePriorityValue = {
  __typename?: 'IssuePriorityValue';
  /** Priority's label. */
  label: Scalars['String']['output'];
  /** Priority's number value. */
  priority: Scalars['Int']['output'];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  __typename?: 'IssueRelation';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
  /** The relationship of the issue with the related issue. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueRelationConnection = {
  __typename?: 'IssueRelationConnection';
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars['String']['input'];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars['String']['input'];
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
};

export type IssueRelationEdge = {
  __typename?: 'IssueRelationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueRelation;
};

/** Issue relation history's payload */
export type IssueRelationHistoryPayload = {
  __typename?: 'IssueRelationHistoryPayload';
  /** The identifier of the related issue. */
  identifier: Scalars['String']['output'];
  /** The type of the change. */
  type: Scalars['String']['output'];
};

export type IssueRelationPayload = {
  __typename?: 'IssueRelationPayload';
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = 'blocks',
  Duplicate = 'duplicate',
  Related = 'related'
}

export type IssueRelationUpdateInput = {
  /** The identifier of the issue that is related to another issue. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the related issue. */
  relatedIssueId?: InputMaybe<Scalars['String']['input']>;
  /** The type of relation of the issue to the related issue. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IssueSearchPayload = {
  __typename?: 'IssueSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<IssueSearchResultEdge>;
  nodes: Array<IssueSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float']['output'];
};

export type IssueSearchResult = Node & {
  __typename?: 'IssueSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float']['output'];
  /** Suggested branch name for the issue. */
  branchName: Scalars['String']['output'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int']['output'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /** [Internal] The issue's description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']['output']>;
  /** [ALPHA] The external user who created the issue. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** The users favorite associated with this issue. */
  favorite?: Maybe<Favorite>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String']['output'];
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** Metadata related to search result */
  metadata: Scalars['JSONObject']['output'];
  /** The issue's unique number. */
  number: Scalars['Float']['output'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']['output']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Float']['output'];
  /** Label for the priority. */
  priorityLabel: Scalars['String']['output'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** The projectMilestone that the issue is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** [Internal] The time at which the issue's SLA will breach. */
  slaBreachesAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] The time at which the issue's SLA began. */
  slaStartedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue entered triage. */
  startedTriageAt?: Maybe<Scalars['DateTime']['output']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']['output']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String']['output'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the issue left triage. */
  triagedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Issue URL. */
  url: Scalars['String']['output'];
};


export type IssueSearchResultAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultSubscribersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type IssueSearchResultConnection = {
  __typename?: 'IssueSearchResultConnection';
  edges: Array<IssueSearchResultEdge>;
  nodes: Array<IssueSearchResult>;
  pageInfo: PageInfo;
};

export type IssueSearchResultEdge = {
  __typename?: 'IssueSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueSearchResult;
};

export type IssueUpdateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifiers of the companies associated with this ticket. */
  companyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']['input']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']['input']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The timestamp at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The identifier of the user who snoozed the issue. */
  snoozedById?: InputMaybe<Scalars['String']['input']>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The issue title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Wether the issue has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JiraConfigurationInput = {
  /** The Jira personal access token. */
  accessToken: Scalars['String']['input'];
  /** The Jira user's email address. */
  email: Scalars['String']['input'];
  /** The Jira installation hostname. */
  hostname: Scalars['String']['input'];
  /** The Jira project keys to scope the integration to. */
  project?: InputMaybe<Scalars['String']['input']>;
};

/** Tuple for mapping Jira projects to Linear teams. */
export type JiraLinearMapping = {
  __typename?: 'JiraLinearMapping';
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String']['output'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String']['output'];
};

export type JiraLinearMappingInput = {
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String']['input'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String']['input'];
};

/** Metadata about a Jira project. */
export type JiraProjectData = {
  __typename?: 'JiraProjectData';
  /** The Jira id for this project. */
  id: Scalars['String']['output'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String']['output'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String']['output'];
};

export type JiraProjectDataInput = {
  /** The Jira id for this project. */
  id: Scalars['String']['input'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String']['input'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String']['input'];
};

/** Jira specific settings. */
export type JiraSettings = {
  __typename?: 'JiraSettings';
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: Maybe<Array<JiraLinearMapping>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectData>;
};

export type JiraSettingsInput = {
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: InputMaybe<Array<JiraLinearMappingInput>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectDataInput>;
};

export type JoinOrganizationInput = {
  /** The identifier of the organization. */
  organizationId: Scalars['String']['input'];
};

/** A label notification subscription. */
export type LabelNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'LabelNotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The label subscribed to. */
  label: IssueLabel;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates an integration api key for Airbyte to connect with Linear */
  airbyteIntegrationConnect: IntegrationPayload;
  /** Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** Deletes an API key. */
  apiKeyDelete: DeletePayload;
  /**
   * [DEPRECATED] Archives an issue attachment.
   * @deprecated This mutation is deprecated, please use `attachmentDelete` instead
   */
  attachmentArchive: AttachmentArchivePayload;
  /** Creates a new attachment, or updates existing if the same `url` and `issueId` is used. */
  attachmentCreate: AttachmentPayload;
  /** Deletes an issue attachment. */
  attachmentDelete: DeletePayload;
  /** Link an existing Discord message to an issue. */
  attachmentLinkDiscord: AttachmentPayload;
  /** Link an existing Front conversation to an issue. */
  attachmentLinkFront: FrontAttachmentPayload;
  /** Link an existing Intercom conversation to an issue. */
  attachmentLinkIntercom: AttachmentPayload;
  /** Link an existing Jira issue to an issue. */
  attachmentLinkJiraIssue: AttachmentPayload;
  /** Link an existing Slack message to an issue. */
  attachmentLinkSlack: AttachmentPayload;
  /** Link any url to an issue. */
  attachmentLinkURL: AttachmentPayload;
  /** Link an existing Zendesk ticket to an issue. */
  attachmentLinkZendesk: AttachmentPayload;
  /** Unsyncs an existing synced Slack attachment. */
  attachmentUnsyncSlack: AttachmentPayload;
  /** Updates an existing issue attachment. */
  attachmentUpdate: AttachmentPayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: DeletePayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** [INTERNAL] Saves sales pricing inquiry to Front. */
  contactSalesCreate: ContactPayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: DeletePayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** Archives a cycle. */
  cycleArchive: CycleArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** Creates a new document. */
  documentCreate: DocumentPayload;
  /** Deletes a document. */
  documentDelete: DeletePayload;
  /** Updates a document. */
  documentUpdate: DocumentPayload;
  /** [INTERNAL] Subscribes the email to the newsletter. */
  emailSubscribe: EmailSubscribePayload;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Unsubscribes the user from one type of emails. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: DeletePayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: DeletePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** XHR request payload to upload a file for import, directly to Linear's cloud storage. */
  importFileUpload: UploadPayload;
  /** Deletes an integration. */
  integrationDelete: DeletePayload;
  /** Integrates the organization with Discord. */
  integrationDiscord: IntegrationPayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Integrates the organization with Front. */
  integrationFront: IntegrationPayload;
  /** Generates a webhook for the GitHub commit integration. */
  integrationGithubCommitCreate: GitHubCommitIntegrationPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Integrates the organization with Intercom. */
  integrationIntercom: IntegrationPayload;
  /** Disconnects the organization from Intercom. */
  integrationIntercomDelete: IntegrationPayload;
  /**
   * [DEPRECATED] Updates settings on the Intercom integration.
   * @deprecated This mutation is deprecated, please use `integrationSettingsUpdate` instead
   */
  integrationIntercomSettingsUpdate: IntegrationPayload;
  /**
   * Enables Loom integration for the organization.
   * @deprecated Not available.
   */
  integrationLoom: IntegrationPayload;
  /** [INTERNAL] Integrates the organization with PagerDuty. */
  integrationPageDutyConnect: IntegrationPayload;
  /** Requests a currently unavailable integration. */
  integrationRequest: IntegrationRequestPayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** [INTERNAL] Updates the integration. */
  integrationSettingsUpdate: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Integrates the organization with the Slack Asks app */
  integrationSlackAsks: IntegrationPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Slack integration for organization level project update notifications. */
  integrationSlackOrgProjectUpdatesPost: IntegrationPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: IntegrationPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: IntegrationPayload;
  /** Creates a new integrationTemplate join. */
  integrationTemplateCreate: IntegrationTemplatePayload;
  /** Deletes a integrationTemplate. */
  integrationTemplateDelete: DeletePayload;
  /** Updates the organization's Slack integration. */
  integrationUpdateSlack: IntegrationPayload;
  /** Integrates the organization with Zendesk. */
  integrationZendesk: IntegrationPayload;
  /** Creates new settings for one or more integrations. */
  integrationsSettingsCreate: IntegrationsSettingsPayload;
  /** Updates settings related to integrations for a project or a team. */
  integrationsSettingsUpdate: IntegrationsSettingsPayload;
  /** Archives an issue. */
  issueArchive: IssueArchivePayload;
  /** Updates multiple issues at once. */
  issueBatchUpdate: IssueBatchPayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Deletes (trashes) an issue. */
  issueDelete: IssueArchivePayload;
  /** [INTERNAL] Updates an issue description from the Front app to handle Front attachments correctly. */
  issueDescriptionUpdateFromFront: IssuePayload;
  /** Kicks off an Asana import job. */
  issueImportCreateAsana: IssueImportPayload;
  /** Kicks off a Jira import job from a CSV. */
  issueImportCreateCSVJira: IssueImportPayload;
  /** Kicks off a Shortcut (formerly Clubhouse) import job. */
  issueImportCreateClubhouse: IssueImportPayload;
  /** Kicks off a GitHub import job. */
  issueImportCreateGithub: IssueImportPayload;
  /** Kicks off a Jira import job. */
  issueImportCreateJira: IssueImportPayload;
  /** Deletes an import job. */
  issueImportDelete: IssueImportDeletePayload;
  /** Kicks off import processing. */
  issueImportProcess: IssueImportPayload;
  /** Updates the mapping for the issue import. */
  issueImportUpdate: IssueImportPayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Deletes an issue label. */
  issueLabelDelete: DeletePayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: DeletePayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Adds an issue reminder. Will cause a notification to be sent when the issue reminder time is reached. */
  issueReminder: IssuePayload;
  /** Unarchives an issue. */
  issueUnarchive: IssueArchivePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** [INTERNAL] Connects the organization with a Jira Personal Access Token. */
  jiraIntegrationConnect: IntegrationPayload;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Logout of all clients. */
  logout: LogoutResponse;
  /** Archives a notification. */
  notificationArchive: NotificationArchivePayload;
  /** Archives all of the user's past notifications for the associated entity. */
  notificationArchiveAll: NotificationBatchActionPayload;
  /** Marks all past notifications for the associated entity as read. */
  notificationMarkReadAll: NotificationBatchActionPayload;
  /** Marks all past notifications for the associated entity as unread. */
  notificationMarkUnreadAll: NotificationBatchActionPayload;
  /** Snoozes a notification and all past notifications for the associated entity. */
  notificationSnoozeAll: NotificationBatchActionPayload;
  /** Creates a new notification subscription for a cycle, custom view, label, project or team. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /** Deletes a notification subscription reference. */
  notificationSubscriptionDelete: DeletePayload;
  /** Updates a notification subscription. */
  notificationSubscriptionUpdate: NotificationSubscriptionPayload;
  /** Unarchives a notification. */
  notificationUnarchive: NotificationArchivePayload;
  /** Unsnoozes a notification and all past notifications for the associated entity. */
  notificationUnsnoozeAll: NotificationBatchActionPayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** Cancels the deletion of an organization. Administrator privileges required. */
  organizationCancelDelete: OrganizationCancelDeletePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** [INTERNAL] Verifies a domain claim. */
  organizationDomainClaim: OrganizationDomainSimplePayload;
  /** [INTERNAL] Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: DeletePayload;
  /** [INTERNAL] Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: DeletePayload;
  /** Updates an organization invite. */
  organizationInviteUpdate: OrganizationInvitePayload;
  /** Starts a plus trial for the organization. Administrator privileges required. */
  organizationStartPlusTrial: OrganizationStartPlusTrialPayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /**
   * Archives a project.
   * @deprecated Deprecated in favor of projectDelete.
   */
  projectArchive: ProjectArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Deletes a project. All issues will be disassociated from the deleted project. */
  projectDelete: DeletePayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: DeletePayload;
  /** Updates a project link. */
  projectLinkUpdate: ProjectLinkPayload;
  /** Creates a new project milestone. */
  projectMilestoneCreate: ProjectMilestonePayload;
  /** Deletes a project milestone. */
  projectMilestoneDelete: DeletePayload;
  /** Updates a project milestone. */
  projectMilestoneUpdate: ProjectMilestonePayload;
  /** Unarchives a project. */
  projectUnarchive: ProjectArchivePayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Creates a new project update. */
  projectUpdateCreate: ProjectUpdatePayload;
  /** Deletes a project update. */
  projectUpdateDelete: DeletePayload;
  /** Creates a new interaction on a project update. */
  projectUpdateInteractionCreate: ProjectUpdateInteractionPayload;
  /** Mark a project update as read. */
  projectUpdateMarkAsRead: ProjectUpdateWithInteractionPayload;
  /** Updates a project update. */
  projectUpdateUpdate: ProjectUpdatePayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: DeletePayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Re-send an organization invite. */
  resendOrganizationInvite: DeletePayload;
  /** Archives a roadmap. */
  roadmapArchive: RoadmapArchivePayload;
  /** Creates a new roadmap. */
  roadmapCreate: RoadmapPayload;
  /** Deletes a roadmap. */
  roadmapDelete: DeletePayload;
  /** Creates a new roadmapToProject join. */
  roadmapToProjectCreate: RoadmapToProjectPayload;
  /** Deletes a roadmapToProject. */
  roadmapToProjectDelete: DeletePayload;
  /** Updates a roadmapToProject. */
  roadmapToProjectUpdate: RoadmapToProjectPayload;
  /** Unarchives a roadmap. */
  roadmapUnarchive: RoadmapArchivePayload;
  /** Updates a roadmap. */
  roadmapUpdate: RoadmapPayload;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Deletes team's cycles data */
  teamCyclesDelete: TeamPayload;
  /** Deletes a team. */
  teamDelete: DeletePayload;
  /** Deletes a previously used team key. */
  teamKeyDelete: DeletePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: DeletePayload;
  /** Updates a team membership. */
  teamMembershipUpdate: TeamMembershipPayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: DeletePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Makes user a guest. Can only be called by an admin. */
  userDemoteMember: UserAdminPayload;
  /** Connects the Discord user to this Linear account via OAuth2. */
  userDiscordConnect: UserPayload;
  /** Disconnects the external user from this Linear account. */
  userExternalUserDisconnect: UserPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Connects the GitHub user to this Linear account via OAuth2. */
  userGitHubConnect: UserPayload;
  /** Connects the Google Calendar to the user to this Linear account via OAuth2. */
  userGoogleCalendarConnect: UserPayload;
  /** Connects the Jira user to this Linear account via OAuth2. */
  userJiraConnect: UserPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userPromoteMember: UserAdminPayload;
  /** [Deprecated] Updates a user's settings flag. */
  userSettingsFlagIncrement: UserSettingsFlagPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: DeletePayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: DeletePayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: WorkflowStateArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
};


export type MutationAirbyteIntegrationConnectArgs = {
  input: AirbyteConfigurationInput;
};


export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};


export type MutationApiKeyDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentCreateArgs = {
  input: AttachmentCreateInput;
};


export type MutationAttachmentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentLinkDiscordArgs = {
  channelId: Scalars['String']['input'];
  issueId: Scalars['String']['input'];
  messageId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkFrontArgs = {
  conversationId: Scalars['String']['input'];
  issueId: Scalars['String']['input'];
};


export type MutationAttachmentLinkIntercomArgs = {
  conversationId: Scalars['String']['input'];
  issueId: Scalars['String']['input'];
};


export type MutationAttachmentLinkJiraIssueArgs = {
  issueId: Scalars['String']['input'];
  jiraIssueId: Scalars['String']['input'];
};


export type MutationAttachmentLinkSlackArgs = {
  channel: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  latest: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  ts?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkUrlArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkZendeskArgs = {
  issueId: Scalars['String']['input'];
  ticketId: Scalars['String']['input'];
};


export type MutationAttachmentUnsyncSlackArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentUpdateArgs = {
  id: Scalars['String']['input'];
  input: AttachmentUpdateInput;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['String']['input'];
  input: CommentUpdateInput;
};


export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};


export type MutationContactSalesCreateArgs = {
  input: ContactSalesCreateInput;
};


export type MutationCreateCsvExportReportArgs = {
  includePrivateTeamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateOrganizationFromOnboardingArgs = {
  input: CreateOrganizationInput;
  survey?: InputMaybe<OnboardingCustomerSurvey>;
};


export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};


export type MutationCustomViewDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomViewUpdateArgs = {
  id: Scalars['String']['input'];
  input: CustomViewUpdateInput;
};


export type MutationCycleArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};


export type MutationCycleUpdateArgs = {
  id: Scalars['String']['input'];
  input: CycleUpdateInput;
};


export type MutationDocumentCreateArgs = {
  input: DocumentCreateInput;
};


export type MutationDocumentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDocumentUpdateArgs = {
  id: Scalars['String']['input'];
  input: DocumentUpdateInput;
};


export type MutationEmailSubscribeArgs = {
  input: EmailSubscribeInput;
};


export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};


export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};


export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};


export type MutationEmojiDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};


export type MutationFavoriteDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationFavoriteUpdateArgs = {
  id: Scalars['String']['input'];
  input: FavoriteUpdateInput;
};


export type MutationFileUploadArgs = {
  contentType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  makePublic?: InputMaybe<Scalars['Boolean']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  size: Scalars['Int']['input'];
};


export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};


export type MutationImageUploadFromUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationImportFileUploadArgs = {
  contentType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  size: Scalars['Int']['input'];
};


export type MutationIntegrationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIntegrationDiscordArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationFigmaArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationFrontArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars['String']['input'];
};


export type MutationIntegrationGitlabConnectArgs = {
  accessToken: Scalars['String']['input'];
  gitlabUrl: Scalars['String']['input'];
};


export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars['String']['input'];
};


export type MutationIntegrationIntercomArgs = {
  code: Scalars['String']['input'];
  domainUrl?: InputMaybe<Scalars['String']['input']>;
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationIntercomSettingsUpdateArgs = {
  input: IntercomSettingsInput;
};


export type MutationIntegrationPageDutyConnectArgs = {
  apiToken: Scalars['String']['input'];
};


export type MutationIntegrationRequestArgs = {
  input: IntegrationRequestInput;
};


export type MutationIntegrationSentryConnectArgs = {
  code: Scalars['String']['input'];
  installationId: Scalars['String']['input'];
  organizationSlug: Scalars['String']['input'];
};


export type MutationIntegrationSettingsUpdateArgs = {
  id: Scalars['String']['input'];
  input: IntegrationSettingsInput;
};


export type MutationIntegrationSlackArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIntegrationSlackAsksArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackImportEmojisArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackOrgProjectUpdatesPostArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackPersonalArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackPostArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['String']['input'];
};


export type MutationIntegrationSlackProjectPostArgs = {
  code: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  service: Scalars['String']['input'];
};


export type MutationIntegrationTemplateCreateArgs = {
  input: IntegrationTemplateCreateInput;
};


export type MutationIntegrationTemplateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIntegrationUpdateSlackArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationZendeskArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  scope: Scalars['String']['input'];
  subdomain: Scalars['String']['input'];
};


export type MutationIntegrationsSettingsCreateArgs = {
  input: IntegrationsSettingsCreateInput;
};


export type MutationIntegrationsSettingsUpdateArgs = {
  id: Scalars['String']['input'];
  input: IntegrationsSettingsUpdateInput;
};


export type MutationIssueArchiveArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIssueBatchUpdateArgs = {
  ids: Array<Scalars['UUID']['input']>;
  input: IssueUpdateInput;
};


export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};


export type MutationIssueDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueDescriptionUpdateFromFrontArgs = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationIssueImportCreateAsanaArgs = {
  asanaTeamName: Scalars['String']['input'];
  asanaToken: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateCsvJiraArgs = {
  csvUrl: Scalars['String']['input'];
  jiraEmail?: InputMaybe<Scalars['String']['input']>;
  jiraHostname?: InputMaybe<Scalars['String']['input']>;
  jiraToken?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateClubhouseArgs = {
  clubhouseGroupName: Scalars['String']['input'];
  clubhouseToken: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateGithubArgs = {
  githubRepoName: Scalars['String']['input'];
  githubRepoOwner: Scalars['String']['input'];
  githubShouldImportOrgProjects?: InputMaybe<Scalars['Boolean']['input']>;
  githubToken: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateJiraArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  jiraEmail: Scalars['String']['input'];
  jiraHostname: Scalars['String']['input'];
  jiraProject: Scalars['String']['input'];
  jiraToken: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportDeleteArgs = {
  issueImportId: Scalars['String']['input'];
};


export type MutationIssueImportProcessArgs = {
  issueImportId: Scalars['String']['input'];
  mapping: Scalars['JSONObject']['input'];
};


export type MutationIssueImportUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueImportUpdateInput;
};


export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
  replaceTeamLabels?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIssueLabelDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueLabelUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueLabelUpdateInput;
};


export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
};


export type MutationIssueRelationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueRelationUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueRelationUpdateInput;
};


export type MutationIssueReminderArgs = {
  id: Scalars['String']['input'];
  reminderAt: Scalars['DateTime']['input'];
};


export type MutationIssueUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueUpdateInput;
};


export type MutationJiraIntegrationConnectArgs = {
  input: JiraConfigurationInput;
};


export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};


export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type MutationNotificationArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationArchiveAllArgs = {
  input: NotificationEntityInput;
};


export type MutationNotificationMarkReadAllArgs = {
  input: NotificationEntityInput;
  readAt: Scalars['DateTime']['input'];
};


export type MutationNotificationMarkUnreadAllArgs = {
  input: NotificationEntityInput;
};


export type MutationNotificationSnoozeAllArgs = {
  input: NotificationEntityInput;
  snoozedUntilAt: Scalars['DateTime']['input'];
};


export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};


export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationSubscriptionUpdateArgs = {
  id: Scalars['String']['input'];
  input: NotificationSubscriptionUpdateInput;
};


export type MutationNotificationUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationUnsnoozeAllArgs = {
  input: NotificationEntityInput;
  unsnoozedAt: Scalars['DateTime']['input'];
};


export type MutationNotificationUpdateArgs = {
  id: Scalars['String']['input'];
  input: NotificationUpdateInput;
};


export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};


export type MutationOrganizationDomainClaimArgs = {
  id: Scalars['String']['input'];
};


export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
  triggerEmailVerification?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};


export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};


export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationOrganizationInviteUpdateArgs = {
  id: Scalars['String']['input'];
  input: OrganizationInviteUpdateInput;
};


export type MutationOrganizationUpdateArgs = {
  input: UpdateOrganizationInput;
};


export type MutationProjectArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};


export type MutationProjectDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};


export type MutationProjectLinkDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectLinkUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectLinkUpdateInput;
};


export type MutationProjectMilestoneCreateArgs = {
  input: ProjectMilestoneCreateInput;
};


export type MutationProjectMilestoneDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectMilestoneUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectMilestoneUpdateInput;
};


export type MutationProjectUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectUpdateInput;
};


export type MutationProjectUpdateCreateArgs = {
  input: ProjectUpdateCreateInput;
};


export type MutationProjectUpdateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectUpdateInteractionCreateArgs = {
  input: ProjectUpdateInteractionCreateInput;
};


export type MutationProjectUpdateMarkAsReadArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectUpdateUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectUpdateUpdateInput;
};


export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};


export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};


export type MutationReactionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars['String']['input'];
};


export type MutationResendOrganizationInviteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapCreateArgs = {
  input: RoadmapCreateInput;
};


export type MutationRoadmapDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapToProjectCreateArgs = {
  input: RoadmapToProjectCreateInput;
};


export type MutationRoadmapToProjectDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapToProjectUpdateArgs = {
  id: Scalars['String']['input'];
  input: RoadmapToProjectUpdateInput;
};


export type MutationRoadmapUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapUpdateArgs = {
  id: Scalars['String']['input'];
  input: RoadmapUpdateInput;
};


export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: InputMaybe<Scalars['String']['input']>;
  input: TeamCreateInput;
};


export type MutationTeamCyclesDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamKeyDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};


export type MutationTeamMembershipDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamMembershipUpdateArgs = {
  id: Scalars['String']['input'];
  input: TeamMembershipUpdateInput;
};


export type MutationTeamUpdateArgs = {
  id: Scalars['String']['input'];
  input: TeamUpdateInput;
};


export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTemplateUpdateArgs = {
  id: Scalars['String']['input'];
  input: TemplateUpdateInput;
};


export type MutationUserDemoteAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserDemoteMemberArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserDiscordConnectArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationUserExternalUserDisconnectArgs = {
  service: Scalars['String']['input'];
};


export type MutationUserFlagUpdateArgs = {
  flag: UserFlagType;
  operation: UserFlagUpdateOperation;
};


export type MutationUserGitHubConnectArgs = {
  code: Scalars['String']['input'];
};


export type MutationUserGoogleCalendarConnectArgs = {
  code: Scalars['String']['input'];
};


export type MutationUserJiraConnectArgs = {
  code: Scalars['String']['input'];
};


export type MutationUserPromoteAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserPromoteMemberArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserSettingsFlagIncrementArgs = {
  flag: Scalars['String']['input'];
};


export type MutationUserSettingsFlagsResetArgs = {
  flags?: InputMaybe<Array<UserFlagType>>;
};


export type MutationUserSettingsUpdateArgs = {
  id: Scalars['String']['input'];
  input: UserSettingsUpdateInput;
};


export type MutationUserSuspendArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserUnsuspendArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};


export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};


export type MutationViewPreferencesDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationViewPreferencesUpdateArgs = {
  id: Scalars['String']['input'];
  input: ViewPreferencesUpdateInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['String']['input'];
  input: WebhookUpdateInput;
};


export type MutationWorkflowStateArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};


export type MutationWorkflowStateUpdateArgs = {
  id: Scalars['String']['input'];
  input: WorkflowStateUpdateInput;
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
};

/** A notification sent to a user. */
export type Notification = {
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Notification type */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that received the notification. */
  user: User;
};

/** A generic payload return from entity archive mutations. */
export type NotificationArchivePayload = ArchivePayload & {
  __typename?: 'NotificationArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Notification>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type NotificationBatchActionPayload = {
  __typename?: 'NotificationBatchActionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The notifications that were updated. */
  notifications: Array<Notification>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Notification;
};

/** Describes the type and id of the entity to target for notifications. */
export type NotificationEntityInput = {
  /** The id of the issue related to the notification. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the OAuth client approval related to the notification. */
  oauthClientApprovalId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the project related to the notification. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the project update related to the notification. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationPayload = {
  __typename?: 'NotificationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = {
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type NotificationSubscriptionConnection = {
  __typename?: 'NotificationSubscriptionConnection';
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionCreateInput = {
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: InputMaybe<ContextViewType>;
  /** The identifier of the custom view to subscribe to. */
  customViewId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the cycle to subscribe to. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the label to subscribe to. */
  labelId?: InputMaybe<Scalars['String']['input']>;
  /** The types of notifications of the subscription. */
  notificationSubscriptionTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier of the project to subscribe to. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the team to subscribe to. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: InputMaybe<UserContextViewType>;
  /** The identifier of the user to subscribe to. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationSubscriptionEdge = {
  __typename?: 'NotificationSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: NotificationSubscription;
};

export type NotificationSubscriptionPayload = {
  __typename?: 'NotificationSubscriptionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type NotificationSubscriptionUpdateInput = {
  /** The types of notifications of the subscription. */
  notificationSubscriptionTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NotificationUpdateInput = {
  /** The id of the project update related to the notification. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
  /** The time when notification was marked as read. */
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Notion specific settings. */
export type NotionSettings = {
  __typename?: 'NotionSettings';
  /** The ID of the Notion workspace being connected. */
  workspaceId: Scalars['String']['output'];
  /** The name of the Notion workspace being connected. */
  workspaceName: Scalars['String']['output'];
};

export type NotionSettingsInput = {
  /** The ID of the Notion workspace being connected. */
  workspaceId: Scalars['String']['input'];
  /** The name of the Notion workspace being connected. */
  workspaceName: Scalars['String']['input'];
};

/** Cycle filtering options. */
export type NullableCycleFilter = {
  /** Compound filters, one of which need to be matched by the cycle. */
  and?: InputMaybe<Array<NullableCycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the filtering active cycle. */
  isActive?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering future cycles. */
  isFuture?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering next cycle. */
  isNext?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering past cycles. */
  isPast?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: InputMaybe<BooleanComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<NullableCycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional dates. */
export type NullableDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Issue filtering options. */
export type NullableIssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<NullableIssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<NullableIssueFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional numbers. */
export type NullableNumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Project filtering options. */
export type NullableProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<NullableProjectFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<NullableProjectFilter>>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the projects content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Project milestone filtering options. */
export type NullableProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: InputMaybe<Array<NullableProjectMilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: InputMaybe<Array<NullableProjectMilestoneFilter>>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional strings. */
export type NullableStringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

/** Team filtering options. */
export type NullableTeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<NullableTeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<NullableTeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type NullableTimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDate']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDate']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** User filtering options. */
export type NullableUserFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<NullableUserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<NullableUserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for numbers. */
export type NumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** The different requests statuses possible for an OAuth client approval request */
export enum OAuthClientApprovalStatus {
  Approved = 'approved',
  Denied = 'denied',
  Requested = 'requested'
}

/** OAuth2 client application */
export type OauthClient = Node & {
  __typename?: 'OauthClient';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the OAuthClient. */
  creator: User;
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer. */
  developerUrl: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** OAuth application's client name. */
  name: Scalars['String']['output'];
  /** The organization that the OAuthClient is associated with. */
  organization: Organization;
  /** Whether the OAuth application is publicly visible, or only visible to the creating workspace. */
  publicEnabled: Scalars['Boolean']['output'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The resource types to request when creating new webhooks. */
  webhookResourceTypes: Array<Scalars['String']['output']>;
  /** Webhook secret token for verifying the origin on the recipient side. */
  webhookSecret?: Maybe<Scalars['String']['output']>;
  /** Webhook URL */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** Request to install OAuth clients on organizations and the response to the request. */
export type OauthClientApproval = Node & {
  __typename?: 'OauthClientApproval';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The reason the request for the OAuth client approval was denied. */
  denyReason?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The uuid of the OAuth client being requested for installation. */
  oauthClientId: Scalars['String']['output'];
  /** The reason the person wants to install this OAuth client. */
  requestReason?: Maybe<Scalars['String']['output']>;
  /** The person who requested installing the OAuth client. */
  requesterId: Scalars['String']['output'];
  /** The person who responded to the request to install the OAuth client. */
  responderId?: Maybe<Scalars['String']['output']>;
  /** The scopes the app has requested. */
  scopes: Array<Scalars['String']['output']>;
  /** The status for the OAuth client approval request. */
  status: OAuthClientApprovalStatus;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** An oauth client approval related notification */
export type OauthClientApprovalNotification = Entity & Node & Notification & {
  __typename?: 'OauthClientApprovalNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The OAuth client approval request related to the notification. */
  oauthClientApproval: OauthClientApproval;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Notification type */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that received the notification. */
  user: User;
};

export type OauthClientConnection = {
  __typename?: 'OauthClientConnection';
  edges: Array<OauthClientEdge>;
  nodes: Array<OauthClient>;
  pageInfo: PageInfo;
};

export type OauthClientEdge = {
  __typename?: 'OauthClientEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: OauthClient;
};

export type OnboardingCustomerSurvey = {
  companyRole?: InputMaybe<Scalars['String']['input']>;
  companySize?: InputMaybe<Scalars['String']['input']>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  __typename?: 'Organization';
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars['Int']['output'];
  /** The time at which deletion of the organization was requested. */
  deletionRequestedAt?: Maybe<Scalars['DateTime']['output']>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars['String']['output']>;
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars['Boolean']['output'];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** Labels associated with the organization. */
  labels: IssueLabelConnection;
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The organization's name. */
  name: Scalars['String']['output'];
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars['Float']['output'];
  /** Previously used URL keys for the organization (last 3 are kept and redirected). */
  previousUrlKeys: Array<Scalars['String']['output']>;
  /** The day at which to prompt for project updates. */
  projectUpdateRemindersDay: Day;
  /** The hour at which to prompt for project updates. */
  projectUpdateRemindersHour: Scalars['Float']['output'];
  /** The frequency at which to prompt for project updates. */
  projectUpdatesReminderFrequency: ProjectUpdateReminderFrequency;
  /** The feature release channel the organization belongs to. */
  releaseChannel: ReleaseChannel;
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars['Boolean']['output'];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean']['output'];
  /** Whether SCIM provisioning is enabled for organization. */
  scimEnabled: Scalars['Boolean']['output'];
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<PaidSubscription>;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /** Templates associated with the organization. */
  templates: TemplateConnection;
  /** The time at which the trial of the plus plan will end. */
  trialEndsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String']['output'];
  /** Number of active users in the organization. */
  userCount: Scalars['Int']['output'];
  /** Users associated with the organization. */
  users: UserConnection;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type OrganizationAcceptedOrExpiredInviteDetailsPayload = {
  __typename?: 'OrganizationAcceptedOrExpiredInviteDetailsPayload';
  /** The status of the invite */
  status: OrganizationInviteStatus;
};

export type OrganizationCancelDeletePayload = {
  __typename?: 'OrganizationCancelDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationDeletePayload = {
  __typename?: 'OrganizationDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  __typename?: 'OrganizationDomain';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** What type of auth is the domain used for */
  authType: OrganizationDomainAuthType;
  /** Whether the domains was claimed by the organization through DNS verification. */
  claimed?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Domain name */
  name: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** E-mail used to verify this domain */
  verificationEmail?: Maybe<Scalars['String']['output']>;
  /** Is this domain verified */
  verified: Scalars['Boolean']['output'];
};

/** What type of auth is the domain used for. */
export enum OrganizationDomainAuthType {
  General = 'general',
  Saml = 'saml'
}

/** [INTERNAL] Domain claim request response. */
export type OrganizationDomainClaimPayload = {
  __typename?: 'OrganizationDomainClaimPayload';
  /** String to put into DNS for verification. */
  verificationString: Scalars['String']['output'];
};

export type OrganizationDomainCreateInput = {
  /** The authentication type this domain is for. */
  authType?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The domain name to add. */
  name: Scalars['String']['input'];
  /** The email address to which to send the verification code. */
  verificationEmail?: InputMaybe<Scalars['String']['input']>;
};

/** [INTERNAL] Organization domain operation response. */
export type OrganizationDomainPayload = {
  __typename?: 'OrganizationDomainPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** [INTERNAL] Organization domain operation response. */
export type OrganizationDomainSimplePayload = {
  __typename?: 'OrganizationDomainSimplePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationDomainVerificationInput = {
  /** The identifier in UUID v4 format of the domain being verified. */
  organizationDomainId: Scalars['String']['input'];
  /** The verification code sent via email. */
  verificationCode: Scalars['String']['input'];
};

export type OrganizationExistsPayload = {
  __typename?: 'OrganizationExistsPayload';
  /** Whether the organization exists. */
  exists: Scalars['Boolean']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  __typename?: 'OrganizationInvite';
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted */
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The invitees email address. */
  email: Scalars['String']['output'];
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** The invite was sent to external address. */
  external: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The user who created the invitation. */
  inviter: User;
  /** The organization that the invite is associated with. */
  organization: Organization;
  /** The user role that the invitee will receive upon accepting the invite. */
  role: UserRoleType;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type OrganizationInviteConnection = {
  __typename?: 'OrganizationInviteConnection';
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteCreateInput = {
  /** The email of the invitee. */
  email: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The message to send to the invitee. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** What user role the invite should grant. */
  role?: InputMaybe<UserRoleType>;
  /** The teams that the user has been invited to. */
  teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrganizationInviteDetailsPayload = OrganizationAcceptedOrExpiredInviteDetailsPayload | OrganizationInviteFullDetailsPayload;

export type OrganizationInviteEdge = {
  __typename?: 'OrganizationInviteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: OrganizationInvite;
};

export type OrganizationInviteFullDetailsPayload = {
  __typename?: 'OrganizationInviteFullDetailsPayload';
  /** Whether the invite has already been accepted. */
  accepted: Scalars['Boolean']['output'];
  /** When the invite was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The email of the invitee */
  email: Scalars['String']['output'];
  /** Whether the invite has expired. */
  expired: Scalars['Boolean']['output'];
  /** The name of the inviter */
  inviter: Scalars['String']['output'];
  /** ID of the workspace the invite is for. */
  organizationId: Scalars['String']['output'];
  /** URL of the workspace logo the invite is for. */
  organizationLogoUrl?: Maybe<Scalars['String']['output']>;
  /** Name of the workspace the invite is for. */
  organizationName: Scalars['String']['output'];
  /** What user role the invite should grant. */
  role: UserRoleType;
  /** The status of the invite */
  status: OrganizationInviteStatus;
};

export type OrganizationInvitePayload = {
  __typename?: 'OrganizationInvitePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The different statuses possible for an organization invite. */
export enum OrganizationInviteStatus {
  Accepted = 'accepted',
  Expired = 'expired',
  Pending = 'pending'
}

export type OrganizationInviteUpdateInput = {
  /** The teams that the user has been invited to. */
  teamIds: Array<Scalars['String']['input']>;
};

export type OrganizationPayload = {
  __typename?: 'OrganizationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationStartPlusTrialPayload = {
  __typename?: 'OrganizationStartPlusTrialPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PagerDutyInput = {
  /** The mapping of PagerDuty schedule id to names. */
  scheduleMapping: Array<PagerDutyScheduleMappingInput>;
};

/** Tuple for mapping PagerDuty schedule id to names. */
export type PagerDutyScheduleMapping = {
  __typename?: 'PagerDutyScheduleMapping';
  /** The PagerDuty schedule id. */
  scheduleId: Scalars['String']['output'];
  /** The PagerDuty schedule name. */
  scheduleName: Scalars['String']['output'];
};

export type PagerDutyScheduleMappingInput = {
  /** The PagerDuty schedule id. */
  scheduleId: Scalars['String']['input'];
  /** The PagerDuty schedule name. */
  scheduleName: Scalars['String']['input'];
};

/** PagerDuty specific settings. */
export type PagerDutySettings = {
  __typename?: 'PagerDutySettings';
  /** The mapping of PagerDuty schedule id to names. */
  scheduleMapping: Array<PagerDutyScheduleMapping>;
};

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** The paid subscription of an organization. */
export type PaidSubscription = Node & {
  __typename?: 'PaidSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The date the subscription will be billed next. */
  nextBillingAt?: Maybe<Scalars['DateTime']['output']>;
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars['String']['output']>;
  /** The number of seats in the subscription. */
  seats: Scalars['Float']['output'];
  /** The maximum number of seats that will be billed in the subscription. */
  seatsMaximum?: Maybe<Scalars['Float']['output']>;
  /** The minimum number of seats that will be billed in the subscription. */
  seatsMinimum?: Maybe<Scalars['Float']['output']>;
  /** The subscription type. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** A project. */
export type Project = Node & {
  __typename?: 'Project';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The project's color. */
  color: Scalars['String']['output'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']['output']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']['output']>;
  /** The project was created based on this issue. */
  convertedFromIssue?: Maybe<Issue>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the project. */
  creator: User;
  /** The project's description. */
  description: Scalars['String']['output'];
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The number of in progress estimation points after each week. */
  inProgressScopeHistory: Array<Scalars['Float']['output']>;
  /** Settings for all integrations associated with that project. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']['output']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The project lead. */
  lead?: Maybe<User>;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** The project's name. */
  name: Scalars['String']['output'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float']['output'];
  /** Milestones associated with the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Project updates associated with the project. */
  projectUpdates: ProjectUpdateConnection;
  /** The overall scope (total estimate points) of the project. */
  scope: Scalars['Float']['output'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']['output']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean']['output'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean']['output'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean']['output'];
  /** The project's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order for the project within the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of the state. */
  state: Scalars['String']['output'];
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Project URL. */
  url: Scalars['String']['output'];
};


/** A project. */
export type ProjectDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type ProjectArchivePayload = ArchivePayload & {
  __typename?: 'ProjectArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Project>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Project filtering options. */
export type ProjectCollectionFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectCollectionFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all projects. */
  every?: InputMaybe<ProjectFilter>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectCollectionFilter>>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the projects content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some projects. */
  some?: InputMaybe<ProjectFilter>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the issue from which that project is created. */
  convertedFromIssueId?: InputMaybe<Scalars['String']['input']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of the project. */
  name: Scalars['String']['input'];
  /** The sort order for the project within shared views. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The state of the project. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars['String']['input']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Project;
};

/** Project filtering options. */
export type ProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the projects content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectFilterSuggestionPayload = {
  __typename?: 'ProjectFilterSuggestionPayload';
  /** The json filter that is suggested. */
  filter?: Maybe<Scalars['JSONObject']['output']>;
};

/** An external link for a project. */
export type ProjectLink = Node & {
  __typename?: 'ProjectLink';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the link. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The link's label. */
  label: Scalars['String']['output'];
  /** The project that the link is associated with. */
  project: Project;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The link's URL. */
  url: Scalars['String']['output'];
};

export type ProjectLinkConnection = {
  __typename?: 'ProjectLinkConnection';
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The label for the link. */
  label: Scalars['String']['input'];
  /** Related project for the link. */
  projectId: Scalars['String']['input'];
  /** The URL of the link. */
  url: Scalars['String']['input'];
};

export type ProjectLinkEdge = {
  __typename?: 'ProjectLinkEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectLink;
};

export type ProjectLinkPayload = {
  __typename?: 'ProjectLinkPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectLinkUpdateInput = {
  /** The label for the link. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** The URL of the link. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A milestone for a project. */
export type ProjectMilestone = Node & {
  __typename?: 'ProjectMilestone';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The description of the project milestone. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the project milestone. */
  name: Scalars['String']['output'];
  /** The project of the milestone. */
  project: Project;
  /** The order of the milestone in relation to other milestones within a project. */
  sortOrder: Scalars['Float']['output'];
  /** The planned completion date of the milestone. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Milestone collection filtering options. */
export type ProjectMilestoneCollectionFilter = {
  /** Compound filters, all of which need to be matched by the milestone. */
  and?: InputMaybe<Array<ProjectMilestoneCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all milestones. */
  every?: InputMaybe<ProjectMilestoneFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the milestone. */
  or?: InputMaybe<Array<ProjectMilestoneCollectionFilter>>;
  /** Filters that needs to be matched by some milestones. */
  some?: InputMaybe<ProjectMilestoneFilter>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectMilestoneConnection = {
  __typename?: 'ProjectMilestoneConnection';
  edges: Array<ProjectMilestoneEdge>;
  nodes: Array<ProjectMilestone>;
  pageInfo: PageInfo;
};

export type ProjectMilestoneCreateInput = {
  /** The description of the project milestone. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the project milestone. */
  name: Scalars['String']['input'];
  /** Related project for the project milestone. */
  projectId: Scalars['String']['input'];
  /** The sort order for the project milestone within a project. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned target date of the project milestone. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
};

export type ProjectMilestoneEdge = {
  __typename?: 'ProjectMilestoneEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectMilestone;
};

/** Project milestone filtering options. */
export type ProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: InputMaybe<Array<ProjectMilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: InputMaybe<Array<ProjectMilestoneFilter>>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectMilestonePayload = {
  __typename?: 'ProjectMilestonePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project milestone that was created or updated. */
  projectMilestone: ProjectMilestone;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectMilestoneUpdateInput = {
  /** The description of the project milestone. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the project milestone. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Related project for the project milestone. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order for the project milestone within a project. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned target date of the project milestone. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
};

/** A project related notification */
export type ProjectNotification = Entity & Node & Notification & {
  __typename?: 'ProjectNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project related to the notification. */
  project: Project;
  /** The project update related to the notification. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Notification type */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that received the notification. */
  user: User;
};

/** A project notification subscription. */
export type ProjectNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'ProjectNotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The project subscribed to. */
  project: Project;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type ProjectPayload = {
  __typename?: 'ProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectSearchPayload = {
  __typename?: 'ProjectSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<ProjectSearchResultEdge>;
  nodes: Array<ProjectSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float']['output'];
};

export type ProjectSearchResult = Node & {
  __typename?: 'ProjectSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The project's color. */
  color: Scalars['String']['output'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']['output']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']['output']>;
  /** The project was created based on this issue. */
  convertedFromIssue?: Maybe<Issue>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the project. */
  creator: User;
  /** The project's description. */
  description: Scalars['String']['output'];
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The number of in progress estimation points after each week. */
  inProgressScopeHistory: Array<Scalars['Float']['output']>;
  /** Settings for all integrations associated with that project. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']['output']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The project lead. */
  lead?: Maybe<User>;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** Metadata related to search result */
  metadata: Scalars['JSONObject']['output'];
  /** The project's name. */
  name: Scalars['String']['output'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float']['output'];
  /** Milestones associated with the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Project updates associated with the project. */
  projectUpdates: ProjectUpdateConnection;
  /** The overall scope (total estimate points) of the project. */
  scope: Scalars['Float']['output'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']['output']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean']['output'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean']['output'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean']['output'];
  /** The project's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order for the project within the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of the state. */
  state: Scalars['String']['output'];
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Project URL. */
  url: Scalars['String']['output'];
};


export type ProjectSearchResultDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type ProjectSearchResultConnection = {
  __typename?: 'ProjectSearchResultConnection';
  edges: Array<ProjectSearchResultEdge>;
  nodes: Array<ProjectSearchResult>;
  pageInfo: PageInfo;
};

export type ProjectSearchResultEdge = {
  __typename?: 'ProjectSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectSearchResult;
};

/** A update associated with an project. */
export type ProjectUpdate = Node & {
  __typename?: 'ProjectUpdate';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The update content in markdown format. */
  body: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The time the project update was edited. */
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The health of the project at the time of the update. */
  health: ProjectUpdateHealthType;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Serialized JSON representing current state of the project properties when posting the project update. */
  infoSnapshot?: Maybe<Scalars['JSONObject']['output']>;
  /** The project that the update is associated with. */
  project: Project;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The URL to the project update. */
  url: Scalars['String']['output'];
  /** The user who wrote the update. */
  user: User;
};

export type ProjectUpdateConnection = {
  __typename?: 'ProjectUpdateConnection';
  edges: Array<ProjectUpdateEdge>;
  nodes: Array<ProjectUpdate>;
  pageInfo: PageInfo;
};

export type ProjectUpdateCreateInput = {
  /** The content of the project update in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The content of the project update as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The health of the project at the time of the update. */
  health?: InputMaybe<ProjectUpdateHealthType>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The project to associate the project update with. */
  projectId: Scalars['String']['input'];
};

export type ProjectUpdateEdge = {
  __typename?: 'ProjectUpdateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectUpdate;
};

/** The health type of a project when the update is created. */
export enum ProjectUpdateHealthType {
  AtRisk = 'atRisk',
  OffTrack = 'offTrack',
  OnTrack = 'onTrack'
}

export type ProjectUpdateInput = {
  /** The date when the project was canceled. */
  canceledAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The date when the project was completed. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The ID of the issue from which that project is created. */
  convertedFromIssueId?: InputMaybe<Scalars['String']['input']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of the project. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The sort order for the project in shared views. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The state of the project. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Holds information about when a user has interacted with a project update. */
export type ProjectUpdateInteraction = Node & {
  __typename?: 'ProjectUpdateInteraction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project update that has been interacted with. */
  projectUpdate: ProjectUpdate;
  /** The time at which the user read the project update. */
  readAt: Scalars['DateTime']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that has interacted with the project update. */
  user: User;
};

export type ProjectUpdateInteractionConnection = {
  __typename?: 'ProjectUpdateInteractionConnection';
  edges: Array<ProjectUpdateInteractionEdge>;
  nodes: Array<ProjectUpdateInteraction>;
  pageInfo: PageInfo;
};

export type ProjectUpdateInteractionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The id of the project update that has been interacted with. */
  projectUpdateId: Scalars['String']['input'];
  /** The time at which the user read the project update. */
  readAt: Scalars['DateTime']['input'];
};

export type ProjectUpdateInteractionEdge = {
  __typename?: 'ProjectUpdateInteractionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectUpdateInteraction;
};

export type ProjectUpdateInteractionPayload = {
  __typename?: 'ProjectUpdateInteractionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project update interaction that was created or updated. */
  projectUpdateInteraction: ProjectUpdateInteraction;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectUpdatePayload = {
  __typename?: 'ProjectUpdatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project update that was created or updated. */
  projectUpdate: ProjectUpdate;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The frequency at which to send project update reminders. */
export enum ProjectUpdateReminderFrequency {
  Never = 'never',
  TwoWeeks = 'twoWeeks',
  Week = 'week'
}

export type ProjectUpdateUpdateInput = {
  /** The content of the project update in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The content of the project update as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The health of the project at the time of the update. */
  health?: InputMaybe<ProjectUpdateHealthType>;
};

export type ProjectUpdateWithInteractionPayload = {
  __typename?: 'ProjectUpdateWithInteractionPayload';
  /** The project update that was created or updated. */
  interaction: ProjectUpdateInteraction;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project update that was created or updated. */
  projectUpdate: ProjectUpdate;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A user's web browser push notification subscription. */
export type PushSubscription = Node & {
  __typename?: 'PushSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type PushSubscriptionConnection = {
  __typename?: 'PushSubscriptionConnection';
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

export type PushSubscriptionCreateInput = {
  /** The data of the subscription in stringified JSON format. */
  data: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether this is a subscription payload for Google Cloud Messaging or Apple Push Notification service */
  type?: InputMaybe<PushSubscriptionType>;
  /** The user identifier of the subscription. */
  userId: Scalars['String']['input'];
};

export type PushSubscriptionEdge = {
  __typename?: 'PushSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: PushSubscription;
};

export type PushSubscriptionPayload = {
  __typename?: 'PushSubscriptionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type PushSubscriptionTestPayload = {
  __typename?: 'PushSubscriptionTestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The different push subscription types */
export enum PushSubscriptionType {
  Apple = 'apple',
  Web = 'web'
}

export type Query = {
  __typename?: 'Query';
  /** One specific project milestone. */
  ProjectMilestone: ProjectMilestone;
  /** All milestones for the project. */
  ProjectMilestones: ProjectMilestoneConnection;
  /** All teams you the user can administrate. Administrable teams are teams whose settings the user can change, but to whose issues the user doesn't necessarily have access to. */
  administrableTeams: TeamConnection;
  /** All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get basic information for an application. */
  applicationInfo: Application;
  /** [INTERNAL] Get basic information for a list of applications */
  applicationInfoByIds: Array<Application>;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /**
   *
   * One specific issue attachment.
   * [Deprecated] 'url' can no longer be used as the 'id' parameter. Use 'attachmentsForUrl' instead
   */
  attachment: Attachment;
  /**
   *
   * Query an issue by its associated attachment, and its id.
   *
   * @deprecated Will be removed in near future, please use `attachmentsForURL` to get attachments and their issues instead.
   */
  attachmentIssue: Issue;
  /** [Internal] Get a list of all unique attachment sources in the workspace */
  attachmentSources: AttachmentSourcesPayload;
  /**
   * All issue attachments.
   *
   * To get attachments for a given URL, use `attachmentsForURL` query.
   */
  attachments: AttachmentConnection;
  /** Returns issue attachments for a given `url`. */
  attachmentsForURL: AttachmentConnection;
  /** All audit log entries. */
  auditEntries: AuditEntryConnection;
  /** List of audit entry types. */
  auditEntryTypes: Array<AuditEntryType>;
  /** [INTERNAL] Get all authorized applications for a user */
  authorizedApplications: Array<AuthorizedApplication>;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** A specific comment. */
  comment: Comment;
  /** All comments. */
  comments: CommentConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** [INTERNAL] Suggests metadata for a view based on it's filters. */
  customViewDetailsSuggestion: CustomViewSuggestionPayload;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All cycles. */
  cycles: CycleConnection;
  /** One specific document. */
  document: Document;
  /** All documents for the project. */
  documents: DocumentConnection;
  /** Returns embed info for any url */
  embedInfo: EmbedPayload;
  /** A specific emoji. */
  emoji: Emoji;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** One specific external user. */
  externalUser: ExternalUser;
  /** All external users for the organization. */
  externalUsers: ExternalUserConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** Fetch Figma screenshot and other information with file and node identifiers. */
  figmaEmbedInfo: FigmaEmbedPayload;
  /** One specific integration. */
  integration: Integration;
  /** One specific integrationTemplate. */
  integrationTemplate: IntegrationTemplate;
  /** Template and integration connections. */
  integrationTemplates: IntegrationTemplateConnection;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** One specific set of settings. */
  integrationsSettings: IntegrationsSettings;
  /** One specific issue. */
  issue: Issue;
  /** Find issues that are related to a given Figma file key. */
  issueFigmaFileKeySearch: IssueConnection;
  /** Suggests filters for an issue view based on a text prompt. */
  issueFilterSuggestion: IssueFilterSuggestionPayload;
  /** Checks a CSV file validity against a specific import service. */
  issueImportCheckCSV: IssueImportCheckPayload;
  /** Fetches the GitHub token, completing the OAuth flow. */
  issueImportFinishGithubOAuth: GithubOAuthTokenPayload;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** Issue priority values and corresponding labels. */
  issuePriorityValues: Array<IssuePriorityValue>;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** [DEPRECATED] Search issues. This endpoint is deprecated and will be removed in the future – use `searchIssues` instead. */
  issueSearch: IssueConnection;
  /** Find issue based on the VCS branch name. */
  issueVcsBranchSearch?: Maybe<Issue>;
  /** All issues. */
  issues: IssueConnection;
  /** One specific notification. */
  notification: Notification;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** All notifications. */
  notifications: NotificationConnection;
  /** The user's organization. */
  organization: Organization;
  /** [INTERNAL] Checks whether the domain can be claimed. */
  organizationDomainClaimRequest: OrganizationDomainClaimPayload;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** One specific organization invite. */
  organizationInvite: OrganizationInvite;
  /** One specific organization invite. */
  organizationInviteDetails: OrganizationInviteDetailsPayload;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** One specific project. */
  project: Project;
  /** Suggests filters for a project view based on a text prompt. */
  projectFilterSuggestion: ProjectFilterSuggestionPayload;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** A specific project update. */
  projectUpdate: ProjectUpdate;
  /** A specific interaction on a project update. */
  projectUpdateInteraction: ProjectUpdateInteraction;
  /** All interactions on project updates. */
  projectUpdateInteractions: ProjectUpdateInteractionConnection;
  /** All project updates. */
  projectUpdates: ProjectUpdateConnection;
  /** All projects. */
  projects: ProjectConnection;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionTestPayload;
  /** The status of the rate limiter. */
  rateLimitStatus: RateLimitPayload;
  /** One specific roadmap. */
  roadmap: Roadmap;
  /** One specific roadmapToProject. */
  roadmapToProject: RoadmapToProject;
  /** Custom views for the user. */
  roadmapToProjects: RoadmapToProjectConnection;
  /** All roadmaps in the workspace. */
  roadmaps: RoadmapConnection;
  /** Search documents. */
  searchDocuments: DocumentSearchPayload;
  /** Search issues. */
  searchIssues: IssueSearchPayload;
  /** Search projects. */
  searchProjects: ProjectSearchPayload;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** One specific team. */
  team: Team;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** All teams whose issues can be accessed by the user. This might be different from `administrableTeams`, which also includes teams whose settings can be changed by the user. */
  teams: TeamConnection;
  /** A specific template. */
  template: Template;
  /** All templates from all users. */
  templates: Array<Template>;
  /** Returns all templates that are associated with the integration type. */
  templatesForIntegration: Array<Template>;
  /** One specific user. */
  user: User;
  /** Finds a user account by email. */
  userAccountExists?: Maybe<UserAccountExistsPayload>;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All users for the organization. */
  users: UserConnection;
  /** The currently authenticated user. */
  viewer: User;
  /** A specific webhook. */
  webhook: Webhook;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** One specific state. */
  workflowState: WorkflowState;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
  /** [INTERNAL] Get all authorized applications (with limited fields) for a workspace */
  workspaceAuthorizedApplications: Array<WorkspaceAuthorizedApplication>;
};


export type QueryProjectMilestoneArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectMilestoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryAdministrableTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApiKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApplicationInfoArgs = {
  clientId: Scalars['String']['input'];
};


export type QueryApplicationInfoByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryApplicationWithAuthorizationArgs = {
  actor?: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scope: Array<Scalars['String']['input']>;
};


export type QueryAttachmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryAttachmentIssueArgs = {
  id: Scalars['String']['input'];
};


export type QueryAttachmentSourcesArgs = {
  teamId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryAttachmentsForUrlArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  url: Scalars['String']['input'];
};


export type QueryAuditEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomViewArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomViewDetailsSuggestionArgs = {
  filter: Scalars['JSONObject']['input'];
  modelName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomViewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCycleArgs = {
  id: Scalars['String']['input'];
};


export type QueryCyclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryEmbedInfoArgs = {
  url: Scalars['String']['input'];
};


export type QueryEmojiArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmojisArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryExternalUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryExternalUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryFavoriteArgs = {
  id: Scalars['String']['input'];
};


export type QueryFavoritesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryFigmaEmbedInfoArgs = {
  fileId: Scalars['String']['input'];
  nodeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntegrationArgs = {
  id: Scalars['String']['input'];
};


export type QueryIntegrationTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryIntegrationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsSettingsArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueFigmaFileKeySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fileKey: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueFilterSuggestionArgs = {
  prompt: Scalars['String']['input'];
};


export type QueryIssueImportCheckCsvArgs = {
  csvUrl: Scalars['String']['input'];
  service: Scalars['String']['input'];
};


export type QueryIssueImportFinishGithubOAuthArgs = {
  code: Scalars['String']['input'];
};


export type QueryIssueLabelArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueRelationArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIssueVcsBranchSearchArgs = {
  branchName: Scalars['String']['input'];
};


export type QueryIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationSubscriptionArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryOrganizationDomainClaimRequestArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationExistsArgs = {
  urlKey: Scalars['String']['input'];
};


export type QueryOrganizationInviteArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationInviteDetailsArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectFilterSuggestionArgs = {
  prompt: Scalars['String']['input'];
};


export type QueryProjectLinkArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectUpdateArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectUpdateInteractionArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectUpdateInteractionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryRoadmapArgs = {
  id: Scalars['String']['input'];
};


export type QueryRoadmapToProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryRoadmapToProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryRoadmapsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QuerySearchDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  term: Scalars['String']['input'];
};


export type QuerySearchIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  term: Scalars['String']['input'];
};


export type QuerySearchProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  term: Scalars['String']['input'];
};


export type QuerySsoUrlFromEmailArgs = {
  email: Scalars['String']['input'];
  isDesktop?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTeamArgs = {
  id: Scalars['String']['input'];
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String']['input'];
};


export type QueryTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryTemplatesForIntegrationArgs = {
  integrationType: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserAccountExistsArgs = {
  email: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWebhookArgs = {
  id: Scalars['String']['input'];
};


export type QueryWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWorkflowStateArgs = {
  id: Scalars['String']['input'];
};


export type QueryWorkflowStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type RateLimitPayload = {
  __typename?: 'RateLimitPayload';
  /** The identifier we rate limit on. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The kind of rate limit selected for this request. */
  kind: Scalars['String']['output'];
  /** The state of the rate limit. */
  limits: Array<RateLimitResultPayload>;
};

export type RateLimitResultPayload = {
  __typename?: 'RateLimitResultPayload';
  /** The total allowed quantity for this type of limit. */
  allowedAmount: Scalars['Float']['output'];
  /** The period in which the rate limit is fully replenished in ms. */
  period: Scalars['Float']['output'];
  /** The remaining quantity for this type of limit after this request. */
  remainingAmount: Scalars['Float']['output'];
  /** The requested quantity for this type of limit. */
  requestedAmount: Scalars['Float']['output'];
  /** The timestamp after the rate limit is fully replenished as a UNIX timestamp. */
  reset: Scalars['Float']['output'];
  /** What is being rate limited. */
  type: Scalars['String']['output'];
};

/** A reaction associated with a comment or a project update. */
export type Reaction = Node & {
  __typename?: 'Reaction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Name of the reaction's emoji. */
  emoji: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who reacted. */
  user?: Maybe<User>;
};

export type ReactionConnection = {
  __typename?: 'ReactionConnection';
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionCreateInput = {
  /** The comment to associate the reaction with. */
  commentId?: InputMaybe<Scalars['String']['input']>;
  /** The emoji the user reacted with. */
  emoji?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue to associate the reaction with. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The project update to associate the reaction with. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
};

export type ReactionEdge = {
  __typename?: 'ReactionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Reaction;
};

export type ReactionPayload = {
  __typename?: 'ReactionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  reaction: Reaction;
  success: Scalars['Boolean']['output'];
};

/** Comparator for relation existence. */
export type RelationExistsComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equals constraint. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Features release channel */
export enum ReleaseChannel {
  Beta = 'beta',
  Internal = 'internal',
  PreRelease = 'preRelease',
  Public = 'public'
}

/** A roadmap for projects. */
export type Roadmap = Node & {
  __typename?: 'Roadmap';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The roadmap's color. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the roadmap. */
  creator: User;
  /** The description of the roadmap. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the roadmap. */
  name: Scalars['String']['output'];
  /** The organization of the roadmap. */
  organization: Organization;
  /** The user who owns the roadmap. */
  owner: User;
  /** Projects associated with the roadmap. */
  projects: ProjectConnection;
  /** The roadmap's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order of the roadmap within the organization. */
  sortOrder: Scalars['Float']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A roadmap for projects. */
export type RoadmapProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type RoadmapArchivePayload = ArchivePayload & {
  __typename?: 'RoadmapArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Roadmap>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Roadmap collection filtering options. */
export type RoadmapCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<RoadmapCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the roadmap creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all roadmaps. */
  every?: InputMaybe<RoadmapFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the roadmap name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<RoadmapCollectionFilter>>;
  /** Comparator for the roadmap slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some roadmaps. */
  some?: InputMaybe<RoadmapFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type RoadmapConnection = {
  __typename?: 'RoadmapConnection';
  edges: Array<RoadmapEdge>;
  nodes: Array<Roadmap>;
  pageInfo: PageInfo;
};

export type RoadmapCreateInput = {
  /** The roadmap's color. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the roadmap. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the roadmap. */
  name: Scalars['String']['input'];
  /** The owner of the roadmap */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the roadmap within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type RoadmapEdge = {
  __typename?: 'RoadmapEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Roadmap;
};

/** Roadmap filtering options. */
export type RoadmapFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<RoadmapFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the roadmap creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the roadmap name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<RoadmapFilter>>;
  /** Comparator for the roadmap slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type RoadmapPayload = {
  __typename?: 'RoadmapPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The roadmap that was created or updated. */
  roadmap: Roadmap;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Join table between projects and roadmaps */
export type RoadmapToProject = Node & {
  __typename?: 'RoadmapToProject';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project that the roadmap is associated with. */
  project: Project;
  /** The roadmap that the project is associated with. */
  roadmap: Roadmap;
  /** The sort order of the project within the roadmap. */
  sortOrder: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type RoadmapToProjectConnection = {
  __typename?: 'RoadmapToProjectConnection';
  edges: Array<RoadmapToProjectEdge>;
  nodes: Array<RoadmapToProject>;
  pageInfo: PageInfo;
};

export type RoadmapToProjectCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project. */
  projectId: Scalars['String']['input'];
  /** The identifier of the roadmap. */
  roadmapId: Scalars['String']['input'];
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type RoadmapToProjectEdge = {
  __typename?: 'RoadmapToProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: RoadmapToProject;
};

export type RoadmapToProjectPayload = {
  __typename?: 'RoadmapToProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The roadmapToProject that was created or updated. */
  roadmapToProject: RoadmapToProject;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type RoadmapToProjectUpdateInput = {
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type RoadmapUpdateInput = {
  /** The roadmap's color. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the roadmap. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the roadmap. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The owner of the roadmap */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the roadmap within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type SamlConfiguration = {
  __typename?: 'SamlConfiguration';
  /** The issuer's custom entity ID. */
  issuerEntityId?: Maybe<Scalars['String']['output']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']['output']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']['output']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']['output']>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars['String']['output']>;
};

export type SamlConfigurationInput = {
  /** The issuer's custom entity ID. */
  issuerEntityId?: InputMaybe<Scalars['String']['input']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: InputMaybe<Scalars['String']['input']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: InputMaybe<Scalars['String']['input']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: InputMaybe<Scalars['String']['input']>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: InputMaybe<Scalars['String']['input']>;
};

/** The organization's SAML configuration */
export type SamlConfigurationPayload = {
  __typename?: 'SamlConfigurationPayload';
  /** The issuer's custom entity ID. */
  issuerEntityId?: Maybe<Scalars['String']['output']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']['output']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']['output']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']['output']>;
};

/** Sentry specific settings. */
export type SentrySettings = {
  __typename?: 'SentrySettings';
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String']['output'];
};

export type SentrySettingsInput = {
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String']['input'];
};

export enum SlaStatus {
  Breached = 'Breached',
  Completed = 'Completed',
  Failed = 'Failed',
  HighRisk = 'HighRisk',
  LowRisk = 'LowRisk',
  MediumRisk = 'MediumRisk'
}

/** Comparator for sla status. */
export type SlaStatusComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<SlaStatus>;
  /** In-array constraint. */
  in?: InputMaybe<Array<SlaStatus>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<SlaStatus>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<SlaStatus>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Slack notification specific settings. */
export type SlackPostSettings = {
  __typename?: 'SlackPostSettings';
  channel: Scalars['String']['output'];
  channelId: Scalars['String']['output'];
  configurationUrl: Scalars['String']['output'];
};

export type SlackPostSettingsInput = {
  channel: Scalars['String']['input'];
  channelId: Scalars['String']['input'];
  configurationUrl: Scalars['String']['input'];
};

/** Comparator for `sourceType` field. */
export type SourceTypeComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

export type SsoUrlFromEmailResponse = {
  __typename?: 'SsoUrlFromEmailResponse';
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars['String']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Comparator for strings. */
export type StringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Contains either the full serialized state of the application or delta packets that the requester can
 *   apply to the local data set in order to be up-to-date.
 */
export type SyncResponse = {
  __typename?: 'SyncResponse';
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float']['output'];
  /**
   * JSON serialized delta changes that the client can apply to its local state
   *     in order to catch up with the state of the world.
   */
  delta?: Maybe<Scalars['String']['output']>;
  /** The last sync id covered by the response. */
  lastSyncId: Scalars['Float']['output'];
  /**
   * The full state of the organization as a serialized JSON object.
   *     Mutually exclusive with the delta property
   */
  state?: Maybe<Scalars['String']['output']>;
  /** The sync groups that the user is subscribed to. */
  subscribedSyncGroups: Array<Scalars['String']['output']>;
};

export type SynchronizedPayload = {
  __typename?: 'SynchronizedPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  __typename?: 'Team';
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Period after which automatically closed and completed issues are automatically archived in months. */
  autoArchivePeriod: Scalars['Float']['output'];
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod?: Maybe<Scalars['Float']['output']>;
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars['String']['output']>;
  /** The team's color. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Calendar feed URL (iCal) for cycles. */
  cycleCalenderUrl: Scalars['String']['output'];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars['Float']['output'];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars['Float']['output'];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars['Boolean']['output'];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars['Boolean']['output'];
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive: Scalars['Boolean']['output'];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars['Float']['output'];
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars['Boolean']['output'];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars['Float']['output'];
  /** The default workflow state into which issues are set when they are opened by team members. */
  defaultIssueState?: Maybe<WorkflowState>;
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by members of the team.
   * @deprecated Use defaultTemplateForMembers instead
   */
  defaultTemplateForMembersId?: Maybe<Scalars['String']['output']>;
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by non-members of the team.
   * @deprecated Use defaultTemplateForNonMembers instead
   */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']['output']>;
  /** The team's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The workflow state into which issues are moved when a PR has been opened as draft. */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars['Boolean']['output'];
  /** The icon of the team. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Settings for all integrations associated with that team. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars['String']['output'];
  /** Number of issues in the team. */
  issueCount: Scalars['Int']['output'];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars['Boolean']['output'];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars['Boolean']['output'];
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType: Scalars['String']['output'];
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst: Scalars['Boolean']['output'];
  /** Whether to move issues to bottom of the column when changing state. */
  issueSortOrderDefaultToBottom: Scalars['Boolean']['output'];
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** The team's unique key. The key is used in URLs. */
  key: Scalars['String']['output'];
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Users who are members of this team. */
  members: UserConnection;
  /** Memberships associated with the team. For easier access of the same data, use `members` query. */
  memberships: TeamMembershipConnection;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /** The team's name. */
  name: Scalars['String']['output'];
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Whether the team is private or not. */
  private: Scalars['Boolean']['output'];
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** Whether an issue needs to have a priority set before leaving triage */
  requirePriorityToLeaveTriage: Scalars['Boolean']['output'];
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean']['output'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean']['output'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean']['output'];
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars['String']['output'];
  /** Whether triage mode is enabled for the team or not. */
  triageEnabled: Scalars['Boolean']['output'];
  /** The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. */
  triageIssueState?: Maybe<WorkflowState>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars['Float']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};


/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamIssueCountArgs = {
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Roadmap collection filtering options. */
export type TeamCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<TeamCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all roadmaps. */
  every?: InputMaybe<TeamFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<TeamCollectionFilter>>;
  /** Filters that needs to be matched by some roadmaps. */
  some?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamCreateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']['input']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']['input']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']['input']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']['input']>;
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType?: InputMaybe<Scalars['String']['input']>;
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to move issues to bottom of the column when changing state. */
  issueSortOrderDefaultToBottom?: InputMaybe<Scalars['Boolean']['input']>;
  /** The key of the team. If not given, the key will be generated based on the name of the team. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the team. */
  name: Scalars['String']['input'];
  /** The organization associated with the team. */
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** Internal. Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']['input']>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Team;
};

/** Team filtering options. */
export type TeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  __typename?: 'TeamMembership';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether the user is the owner of the team */
  owner?: Maybe<Scalars['Boolean']['output']>;
  /** The order of the item in the users team list. */
  sortOrder: Scalars['Float']['output'];
  /** The team that the membership is associated with. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that the membership is associated with. */
  user: User;
};

export type TeamMembershipConnection = {
  __typename?: 'TeamMembershipConnection';
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  /** The position of the item in the users list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier of the team associated with the membership. */
  teamId: Scalars['String']['input'];
  /** The identifier of the user associated with the membership. */
  userId: Scalars['String']['input'];
};

export type TeamMembershipEdge = {
  __typename?: 'TeamMembershipEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: TeamMembership;
};

export type TeamMembershipPayload = {
  __typename?: 'TeamMembershipPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
};

export type TeamMembershipUpdateInput = {
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  /** The position of the item in the users list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

/** A team notification subscription. */
export type TeamNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'TeamNotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team subscribed to. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type TeamPayload = {
  __typename?: 'TeamPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
};

export type TeamUpdateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']['input']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']['input']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Whether the first cycle should start in the current or the next week. */
  cycleEnabledStartWeek?: InputMaybe<Scalars['String']['input']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']['input']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']['input']>;
  /** Default status for newly created issues. */
  defaultIssueStateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']['input']>;
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType?: InputMaybe<Scalars['String']['input']>;
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to move issues to bottom of the column when changing state. */
  issueSortOrderDefaultToBottom?: InputMaybe<Scalars['Boolean']['input']>;
  /** The key of the team. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the team. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']['input']>;
};

/** A template object used for creating entities faster. */
export type Template = Node & {
  __typename?: 'Template';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the template. */
  creator?: Maybe<User>;
  /** Template description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The user who last updated the template. */
  lastUpdatedBy?: Maybe<User>;
  /** The name of the template. */
  name: Scalars['String']['output'];
  /** The organization that the template is associated with. If null, the template is associated with a particular team. */
  organization?: Maybe<Organization>;
  /** The team that the template is associated with. If null, the template is global to the workspace. */
  team?: Maybe<Team>;
  /** Template data. */
  templateData: Scalars['JSON']['output'];
  /** The entity type this template is for. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateCreateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The template name. */
  name: Scalars['String']['input'];
  /** The identifier or key of the team associated with the template. If not given, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars['JSON']['input'];
  /** The template type, e.g. 'issue'. */
  type: Scalars['String']['input'];
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Template;
};

export type TemplatePayload = {
  __typename?: 'TemplatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The template that was created or updated. */
  template: Template;
};

export type TemplateUpdateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The template name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The identifier or key of the team associated with the template. If set to null, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: InputMaybe<Scalars['JSON']['input']>;
};

/** Comparator for timeless dates. */
export type TimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDate']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDate']['input']>>;
};

export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars['String']['input'];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String']['input'];
  /** The magic login code. */
  token: Scalars['String']['input'];
};

export type UpdateOrganizationInput = {
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: InputMaybe<Array<Scalars['String']['input']>>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: InputMaybe<Scalars['String']['input']>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Linear Preview feature flags */
  linearPreviewFlags?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The logo of the organization. */
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  /** The name of the organization. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether the organization has opted for having to approve all OAuth applications for install. */
  oauthAppReview?: InputMaybe<Scalars['Boolean']['input']>;
  /** The day at which project updates are sent. */
  projectUpdateRemindersDay?: InputMaybe<Day>;
  /** The hour at which project updates are sent. */
  projectUpdateRemindersHour?: InputMaybe<Scalars['Float']['input']>;
  /** The frequency at which project updates are sent. */
  projectUpdatesReminderFrequency?: InputMaybe<ProjectUpdateReminderFrequency>;
  /** Whether the organization has opted for reduced customer support attachment information. */
  reducedPersonalInformation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization is using roadmap. */
  roadmapEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Internal. Whether SLAs have been enabled for the organization. */
  slaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The URL key of the organization. */
  urlKey?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  /** Whether the user account is active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the user account has admin privileges. */
  admin?: InputMaybe<Scalars['Boolean']['input']>;
  /** The avatar image URL of the user. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** The user description or a short bio. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Reason for deactivation. */
  disableReason?: InputMaybe<Scalars['String']['input']>;
  /** The display name of the user. */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** The name of the user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The emoji part of the user status. */
  statusEmoji?: InputMaybe<Scalars['String']['input']>;
  /** The label part of the user status. */
  statusLabel?: InputMaybe<Scalars['String']['input']>;
  /** When the user status should be cleared. */
  statusUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The local timezone of the user. */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  __typename?: 'UploadFile';
  /** The asset URL for the uploaded file. (assigned automatically) */
  assetUrl: Scalars['String']['output'];
  /** The content type. */
  contentType: Scalars['String']['output'];
  /** The filename. */
  filename: Scalars['String']['output'];
  headers: Array<UploadFileHeader>;
  metaData?: Maybe<Scalars['JSONObject']['output']>;
  /** The size of the uploaded file. */
  size: Scalars['Int']['output'];
  /** The signed URL the for the uploaded file. (assigned automatically) */
  uploadUrl: Scalars['String']['output'];
};

export type UploadFileHeader = {
  __typename?: 'UploadFileHeader';
  /** Upload file header key. */
  key: Scalars['String']['output'];
  /** Upload file header value. */
  value: Scalars['String']['output'];
};

export type UploadPayload = {
  __typename?: 'UploadPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  __typename?: 'User';
  /** Whether the user account is active or disabled (suspended). */
  active: Scalars['Boolean']['output'];
  /** Whether the user is an organization administrator. */
  admin: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** [DEPRECATED] Hash for the user to be used in calendar URLs. */
  calendarHash?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Number of issues created. */
  createdIssueCount: Scalars['Int']['output'];
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** A short description of the user, either its title or bio. */
  description?: Maybe<Scalars['String']['output']>;
  /** Reason why is the account disabled. */
  disableReason?: Maybe<Scalars['String']['output']>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String']['output'];
  /** The user's email address. */
  email: Scalars['String']['output'];
  /** Whether the user is a guest in the workspace and limited to accessing a subset of teams. */
  guest: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars['String']['output'];
  /** Whether the user is the currently authenticated user. */
  isMe: Scalars['Boolean']['output'];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  /** The user's full name. */
  name: Scalars['String']['output'];
  /** Organization the user belongs to. */
  organization: Organization;
  /** The emoji to represent the user current status. */
  statusEmoji?: Maybe<Scalars['String']['output']>;
  /** The label of the user current status. */
  statusLabel?: Maybe<Scalars['String']['output']>;
  /** A date at which the user current status should be cleared. */
  statusUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Memberships associated with the user. For easier access of the same data, use `teams` query. */
  teamMemberships: TeamMembershipConnection;
  /** Teams the user is part of. */
  teams: TeamConnection;
  /** The local timezone of the user. */
  timezone?: Maybe<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** User's profile URL. */
  url: Scalars['String']['output'];
};


/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A user account. */
export type UserAccount = {
  __typename?: 'UserAccount';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the model was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user's email address. */
  email: Scalars['String']['output'];
  /** The models identifier. */
  id: Scalars['ID']['output'];
  /** The user's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The authentication service used to create the account. */
  service: Scalars['String']['output'];
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** Users belonging to the account. */
  users: Array<User>;
};

/** [INTERNAL] An email change verification challenge. */
export type UserAccountEmailChange = {
  __typename?: 'UserAccountEmailChange';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp this verification challenge was canceled at. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp the verification codes expire at. */
  expiresAt: Scalars['DateTime']['output'];
  /** The model's identifier. */
  id: Scalars['ID']['output'];
  /** The new email the user account wants to change to. */
  newEmail: Scalars['String']['output'];
  /** The timestamp the new email was verified at. */
  newEmailVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user account's current email. */
  oldEmail: Scalars['String']['output'];
  /** The timestamp the old email was verified at. */
  oldEmailVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/** [INTERNAL] Result of looking up a user account by email. */
export type UserAccountExistsPayload = {
  __typename?: 'UserAccountExistsPayload';
  /** [INTERNAL] Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type UserAdminPayload = {
  __typename?: 'UserAdminPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  __typename?: 'UserAuthorizedApplication';
  /** Error associated with the application needing to be requested for approval in the workspace */
  approvalErrorCode?: Maybe<Scalars['String']['output']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Whether the application was created by Linear. */
  createdByLinear: Scalars['Boolean']['output'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String']['output'];
  /** OAuth application's ID. */
  id: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars['Boolean']['output'];
  /** Application name. */
  name: Scalars['String']['output'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean']['output'];
};

/** User filtering options. */
export type UserCollectionFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserCollectionFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by all users. */
  every?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserCollectionFilter>>;
  /** Filters that needs to be matched by some users. */
  some?: InputMaybe<UserFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export enum UserContextViewType {
  Assigned = 'assigned'
}

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: User;
};

/** User filtering options. */
export type UserFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** The types of flags that the user can have. */
export enum UserFlagType {
  All = 'all',
  AnalyticsWelcomeDismissed = 'analyticsWelcomeDismissed',
  CanPlaySnake = 'canPlaySnake',
  CanPlayTetris = 'canPlayTetris',
  CompletedOnboarding = 'completedOnboarding',
  CycleWelcomeDismissed = 'cycleWelcomeDismissed',
  DesktopDownloadToastDismissed = 'desktopDownloadToastDismissed',
  DesktopInstalled = 'desktopInstalled',
  DesktopTabsOnboardingDismissed = 'desktopTabsOnboardingDismissed',
  DueDateShortcutMigration = 'dueDateShortcutMigration',
  EmptyActiveIssuesDismissed = 'emptyActiveIssuesDismissed',
  EmptyBacklogDismissed = 'emptyBacklogDismissed',
  EmptyCustomViewsDismissed = 'emptyCustomViewsDismissed',
  EmptyMyIssuesDismissed = 'emptyMyIssuesDismissed',
  FigmaPluginBannerDismissed = 'figmaPluginBannerDismissed',
  FigmaPromptDismissed = 'figmaPromptDismissed',
  ImportBannerDismissed = 'importBannerDismissed',
  InsightsHelpDismissed = 'insightsHelpDismissed',
  InsightsWelcomeDismissed = 'insightsWelcomeDismissed',
  IssueLabelSuggestionUsed = 'issueLabelSuggestionUsed',
  IssueMovePromptCompleted = 'issueMovePromptCompleted',
  JoinTeamIntroductionDismissed = 'joinTeamIntroductionDismissed',
  ListSelectionTip = 'listSelectionTip',
  MigrateThemePreference = 'migrateThemePreference',
  MilestoneOnboardingIsSeenAndDismissed = 'milestoneOnboardingIsSeenAndDismissed',
  ProjectBacklogWelcomeDismissed = 'projectBacklogWelcomeDismissed',
  ProjectBoardOnboardingIsSeenAndDismissed = 'projectBoardOnboardingIsSeenAndDismissed',
  ProjectUpdatesWelcomeDismissed = 'projectUpdatesWelcomeDismissed',
  ProjectWelcomeDismissed = 'projectWelcomeDismissed',
  RewindBannerDismissed = 'rewindBannerDismissed',
  SlackCommentReactionTipShown = 'slackCommentReactionTipShown',
  TeamsPageIntroductionDismissed = 'teamsPageIntroductionDismissed',
  ThreadedCommentsNudgeIsSeen = 'threadedCommentsNudgeIsSeen',
  TriageWelcomeDismissed = 'triageWelcomeDismissed',
  UpdatedSlackThreadSyncIntegration = 'updatedSlackThreadSyncIntegration'
}

/** Operations that can be applied to UserFlagType */
export enum UserFlagUpdateOperation {
  Clear = 'clear',
  Decr = 'decr',
  Incr = 'incr',
  Lock = 'lock'
}

/** A user notification subscription. */
export type UserNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'UserNotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user subscribed to. */
  user: User;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The user that was created or updated. */
  user?: Maybe<User>;
};

/** The different permission roles available to users on an organization */
export enum UserRoleType {
  Admin = 'admin',
  Guest = 'guest',
  User = 'user'
}

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  __typename?: 'UserSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Hash for the user to be used in calendar URLs. */
  calendarHash?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars['JSONObject']['output'];
  /** Whether to show full user names instead of display names. */
  showFullUserNames: Scalars['Boolean']['output'];
  /** The email types the user has unsubscribed from. */
  unsubscribedFrom: Array<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user associated with these settings. */
  user: User;
};

export type UserSettingsFlagPayload = {
  __typename?: 'UserSettingsFlagPayload';
  /** The flag key which was updated. */
  flag: Scalars['String']['output'];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The flag value after update. */
  value: Scalars['Int']['output'];
};

export type UserSettingsFlagsResetPayload = {
  __typename?: 'UserSettingsFlagsResetPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type UserSettingsPayload = {
  __typename?: 'UserSettingsPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The user's settings. */
  userSettings: UserSettings;
};

export type UserSettingsUpdateInput = {
  /** The user's notification preferences. */
  notificationPreferences?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The user's settings. */
  settings?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: InputMaybe<Array<Scalars['String']['input']>>;
  /** [Internal] The user's usage warning history. */
  usageWarningHistory?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** View preferences. */
export type ViewPreferences = Node & {
  __typename?: 'ViewPreferences';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The view preference type. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The view type. */
  viewType: Scalars['String']['output'];
};

export type ViewPreferencesCreateInput = {
  /** The custom view these view preferences are associated with. */
  customViewId?: InputMaybe<Scalars['String']['input']>;
  /** The cycle these view preferences are associated with. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The default parameters for the insight on that view. */
  insights?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The label these view preferences are associated with. */
  labelId?: InputMaybe<Scalars['String']['input']>;
  /** View preferences object. */
  preferences: Scalars['JSONObject']['input'];
  /** The project these view preferences are associated with. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The roadmap these view preferences are associated with. */
  roadmapId?: InputMaybe<Scalars['String']['input']>;
  /** The team these view preferences are associated with. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The user profile these view preferences are associated with. */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
};

export type ViewPreferencesPayload = {
  __typename?: 'ViewPreferencesPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = 'organization',
  User = 'user'
}

export type ViewPreferencesUpdateInput = {
  /** The default parameters for the insight on that view. */
  insights?: InputMaybe<Scalars['JSONObject']['input']>;
  /** View preferences. */
  preferences?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The client view this custom view is targeting. */
export enum ViewType {
  ActiveIssues = 'activeIssues',
  AllIssues = 'allIssues',
  Archive = 'archive',
  Backlog = 'backlog',
  Board = 'board',
  CompletedCycle = 'completedCycle',
  CustomRoadmap = 'customRoadmap',
  CustomView = 'customView',
  CustomViews = 'customViews',
  Cycle = 'cycle',
  Inbox = 'inbox',
  Label = 'label',
  MyIssues = 'myIssues',
  MyIssuesActivity = 'myIssuesActivity',
  MyIssuesCreatedByMe = 'myIssuesCreatedByMe',
  MyIssuesSubscribedTo = 'myIssuesSubscribedTo',
  Project = 'project',
  Projects = 'projects',
  ProjectsAll = 'projectsAll',
  ProjectsBacklog = 'projectsBacklog',
  ProjectsClosed = 'projectsClosed',
  QuickView = 'quickView',
  Roadmap = 'roadmap',
  RoadmapAll = 'roadmapAll',
  RoadmapBacklog = 'roadmapBacklog',
  RoadmapClosed = 'roadmapClosed',
  Roadmaps = 'roadmaps',
  Search = 'search',
  Teams = 'teams',
  Triage = 'triage',
  UserProfile = 'userProfile',
  UserProfileCreatedByUser = 'userProfileCreatedByUser'
}

/** A webhook used to send HTTP notifications over data updates */
export type Webhook = Node & {
  __typename?: 'Webhook';
  /** Whether the Webhook is enabled for all public teams, including teams created after the webhook was created. */
  allPublicTeams: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Whether the Webhook is enabled. */
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Webhook label */
  label?: Maybe<Scalars['String']['output']>;
  /** The resource types this webhook is subscribed to. */
  resourceTypes: Array<Scalars['String']['output']>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars['String']['output']>;
  /** The team that the webhook is associated with. If null, the webhook is associated with all public teams of the organization. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Webhook URL */
  url?: Maybe<Scalars['String']['output']>;
};

export type WebhookConnection = {
  __typename?: 'WebhookConnection';
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookCreateInput = {
  /** Whether this webhook is enabled for all public teams. */
  allPublicTeams?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes: Array<Scalars['String']['input']>;
  /** A secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** The identifier or key of the team associated with the Webhook. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The URL that will be called on data changes. */
  url: Scalars['String']['input'];
};

export type WebhookEdge = {
  __typename?: 'WebhookEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Webhook;
};

export type WebhookPayload = {
  __typename?: 'WebhookPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The webhook entity being mutated. */
  webhook: Webhook;
};

export type WebhookUpdateInput = {
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** A secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** The URL that will be called on data changes. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A condition to match for the workflow to be triggered. */
export type WorkflowCondition = {
  /** Trigger the workflow when an issue matches the filter. Can only be used when the trigger type is `Issue`. */
  issueFilter?: InputMaybe<IssueFilter>;
  /** Triggers the workflow when a project matches the filter. Can only be used when the trigger type is `Project`. */
  projectFilter?: InputMaybe<ProjectFilter>;
};

export type WorkflowCronJobDefinition = Node & {
  __typename?: 'WorkflowCronJobDefinition';
  /** An array of activities that will be executed as part of the workflow cron job. */
  activities: Scalars['JSONObject']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the workflow cron job. */
  creator: User;
  /** The description of the workflow cron job. */
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the workflow cron job. */
  name: Scalars['String']['output'];
  /** Cron schedule which is used to execute the workflow cron job. */
  schedule: Scalars['JSONObject']['output'];
  /** The sort order of the workflow cron job definition within its siblings. */
  sortOrder: Scalars['String']['output'];
  /** The team associated with the workflow cron job. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type WorkflowCronJobDefinitionConnection = {
  __typename?: 'WorkflowCronJobDefinitionConnection';
  edges: Array<WorkflowCronJobDefinitionEdge>;
  nodes: Array<WorkflowCronJobDefinition>;
  pageInfo: PageInfo;
};

export type WorkflowCronJobDefinitionEdge = {
  __typename?: 'WorkflowCronJobDefinitionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: WorkflowCronJobDefinition;
};

export type WorkflowDefinition = Node & {
  __typename?: 'WorkflowDefinition';
  /** An array of activities that will be executed as part of the workflow. */
  activities: Scalars['JSONObject']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The conditions that need to be match for the workflow to be triggered. */
  conditions: Scalars['JSONObject']['output'];
  /** The type of view to which this workflow's context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the workflow. */
  creator: User;
  /** The context custom view associated with the workflow. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the workflow. */
  cycle?: Maybe<Cycle>;
  /** The description of the workflow. */
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  /** The name of the group that the workflow belongs to. */
  groupName?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the workflow. */
  label?: Maybe<IssueLabel>;
  /** The name of the workflow. */
  name: Scalars['String']['output'];
  /** The contextual project view associated with the workflow. */
  project?: Maybe<Project>;
  /** The sort order of the workflow definition within its siblings. */
  sortOrder: Scalars['String']['output'];
  /** The team associated with the workflow. If not set, the workflow is associated with the entire organization. */
  team?: Maybe<Team>;
  /** The type of the event that triggers off the workflow. */
  trigger: WorkflowTrigger;
  /** The object type (e.g. Issue) that triggers this workflow. */
  triggerType: WorkflowTriggerType;
  /** The type of the workflow. */
  type: WorkflowType;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The contextual user view associated with the workflow. */
  user?: Maybe<User>;
  /** The type of user view to which this workflow's context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type WorkflowDefinitionConnection = {
  __typename?: 'WorkflowDefinitionConnection';
  edges: Array<WorkflowDefinitionEdge>;
  nodes: Array<WorkflowDefinition>;
  pageInfo: PageInfo;
};

export type WorkflowDefinitionEdge = {
  __typename?: 'WorkflowDefinitionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: WorkflowDefinition;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  __typename?: 'WorkflowState';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The state's UI color as a HEX string. */
  color: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Description of the state. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issues belonging in this state. */
  issues: IssueConnection;
  /** The state's name. */
  name: Scalars['String']['output'];
  /** The position of the state in the team flow. */
  position: Scalars['Float']['output'];
  /** The team to which this state belongs to. */
  team: Team;
  /** The type of the state. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type WorkflowStateArchivePayload = ArchivePayload & {
  __typename?: 'WorkflowStateArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<WorkflowState>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type WorkflowStateConnection = {
  __typename?: 'WorkflowStateConnection';
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateCreateInput = {
  /** The color of the state. */
  color: Scalars['String']['input'];
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the state. */
  name: Scalars['String']['input'];
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']['input']>;
  /** The team associated with the state. */
  teamId: Scalars['String']['input'];
  /** The workflow type. */
  type: Scalars['String']['input'];
};

export type WorkflowStateEdge = {
  __typename?: 'WorkflowStateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: WorkflowState;
};

/** Workflow state filtering options. */
export type WorkflowStateFilter = {
  /** Compound filters, all of which need to be matched by the workflow state. */
  and?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the workflow state description. */
  description?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the workflow states issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the workflow state name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the workflow state. */
  or?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the workflow state position. */
  position?: InputMaybe<NumberComparator>;
  /** Filters that the workflow states team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the workflow state type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type WorkflowStatePayload = {
  __typename?: 'WorkflowStatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
};

export type WorkflowStateUpdateInput = {
  /** The color of the state. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the state. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']['input']>;
};

export enum WorkflowTrigger {
  EntityCreated = 'entityCreated',
  EntityCreatedOrUpdated = 'entityCreatedOrUpdated',
  EntityRemoved = 'entityRemoved',
  EntityUnarchived = 'entityUnarchived',
  EntityUpdated = 'entityUpdated'
}

export enum WorkflowTriggerType {
  Issue = 'issue',
  Project = 'project'
}

export enum WorkflowType {
  Custom = 'custom',
  Sla = 'sla',
  ViewSubscription = 'viewSubscription'
}

/** [INTERNAL] Public information of the OAuth application, plus the userIds and scopes for those users. */
export type WorkspaceAuthorizedApplication = {
  __typename?: 'WorkspaceAuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** UserIds and membership dates of everyone who has authorized the application with the set of scopes */
  memberships: Array<AuthMembership>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
  /** Total number of members that authorized the application */
  totalMembers: Scalars['Float']['output'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean']['output'];
};

/** Zendesk specific settings. */
export type ZendeskSettings = {
  __typename?: 'ZendeskSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the Linear bot user. */
  botUserId?: Maybe<Scalars['String']['output']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']['output']>;
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String']['output'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String']['output'];
};

export type ZendeskSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the Linear bot user. */
  botUserId?: InputMaybe<Scalars['String']['input']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']['input']>;
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String']['input'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String']['input'];
};

export type CommentFragment = { __typename?: 'Comment', id: string, createdAt: any, body: string, parent?: { __typename?: 'Comment', id: string } | null, user?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null };

export type IssueFragment = { __typename?: 'Issue', id: string, title: string, updatedAt: any, description?: string | null, identifier: string, state: { __typename?: 'WorkflowState', name: string, type: string }, comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: string, createdAt: any, body: string, parent?: { __typename?: 'Comment', id: string } | null, user?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null }> } };

export type HillchartBagQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type HillchartBagQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', name: string }, project: { __typename?: 'Project', name: string, description: string, issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', id: string, title: string, updatedAt: any, description?: string | null, identifier: string, state: { __typename?: 'WorkflowState', name: string, type: string }, comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: string, createdAt: any, body: string, parent?: { __typename?: 'Comment', id: string } | null, user?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null }> } }> } } };

export type ProjectsAndOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsAndOrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string, name: string }, projects: { __typename?: 'ProjectConnection', nodes: Array<{ __typename?: 'Project', id: string, name: string, state: string, targetDate?: any | null, description: string, lead?: { __typename?: 'User', name: string } | null, issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', id: string, title: string }> } }> } };

export type UserAndOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAndOrganizationQuery = { __typename?: 'Query', viewer: { __typename?: 'User', id: string, email: string, name: string, avatarUrl?: string | null }, organization: { __typename?: 'Organization', id: string, name: string } };

export const CommentFragmentDoc = gql`
    fragment comment on Comment {
  id
  createdAt
  body
  parent {
    id
  }
  user {
    id
    name
    avatarUrl
  }
}
    `;
export const IssueFragmentDoc = gql`
    fragment issue on Issue {
  id
  title
  updatedAt
  description
  identifier
  state {
    name
    type
  }
  comments(orderBy: createdAt) {
    nodes {
      ...comment
    }
  }
}
    ${CommentFragmentDoc}`;
export const HillchartBagDocument = gql`
    query hillchartBag($projectId: String!) {
  organization {
    name
  }
  project(id: $projectId) {
    name
    description
    issues {
      nodes {
        ...issue
      }
    }
  }
}
    ${IssueFragmentDoc}`;
export const ProjectsAndOrganizationDocument = gql`
    query projectsAndOrganization {
  organization {
    id
    name
  }
  projects {
    nodes {
      id
      name
      state
      targetDate
      lead {
        name
      }
      description
      issues {
        nodes {
          id
          title
        }
      }
    }
  }
}
    `;
export const UserAndOrganizationDocument = gql`
    query userAndOrganization {
  viewer {
    id
    email
    name
    avatarUrl
  }
  organization {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const HillchartBagDocumentString = print(HillchartBagDocument);
const ProjectsAndOrganizationDocumentString = print(ProjectsAndOrganizationDocument);
const UserAndOrganizationDocumentString = print(UserAndOrganizationDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    hillchartBag(variables: HillchartBagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: HillchartBagQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<HillchartBagQuery>(HillchartBagDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hillchartBag', 'query');
    },
    projectsAndOrganization(variables?: ProjectsAndOrganizationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ProjectsAndOrganizationQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ProjectsAndOrganizationQuery>(ProjectsAndOrganizationDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'projectsAndOrganization', 'query');
    },
    userAndOrganization(variables?: UserAndOrganizationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UserAndOrganizationQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UserAndOrganizationQuery>(UserAndOrganizationDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userAndOrganization', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;