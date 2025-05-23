export interface AppSettings {
  id: number;
  serviceEnabled: boolean;
  gmailCheckFrequency: number;
  gmailRateLimit: number;
  geminiModel: string;
  geminiRateLimit: number;
  maxResponseWords: number;
}

export interface Filter {
  id: number;
  name: string;
  enabled: boolean;
  fromEmail?: string;
  subjectContains?: string;
  bodyContains?: string;
  hasNoLabel?: string;
  isStarred?: boolean;
  inInbox?: boolean;
  inPrimaryCategory?: boolean;
  responseTemplate: string;
  createdAt: string;
}

export type FilterFormData = Omit<Filter, 'id' | 'createdAt'>;

export interface ProcessingLog {
  id: number;
  status: 'success' | 'warning' | 'error';
  emailId: string;
  emailFrom: string;
  emailSubject: string;
  filterId: number;
  filterName: string;
  processedAt: string;
  errorMessage?: string;
  draftId?: string;
}

export interface AppStats {
  id: number;
  emailsProcessed: number;
  draftsCreated: number;
  warnings: number;
  errors: number;
  lastUpdated: string;
}

export interface AuthStatus {
  gmail: {
    connected: boolean;
    email?: string;
  };
  gemini: {
    connected: boolean;
  };
}

export interface PaginatedLogs {
  logs: ProcessingLog[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
