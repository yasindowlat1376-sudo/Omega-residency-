export class ApplicationError extends Error { constructor(message:string, public readonly code:string, public readonly cause?:unknown){ super(message); this.name=new.target.name; } }
export class ValidationError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'VALIDATION_ERROR',cause);} }
export class NotFoundError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'NOT_FOUND',cause);} }
export class ConflictError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'CONFLICT',cause);} }
export class PersistenceError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'PERSISTENCE_ERROR',cause);} }
export class AIProviderError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'AI_PROVIDER_ERROR',cause);} }
export class RetrievalError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'RETRIEVAL_ERROR',cause);} }
export class ScoringError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'SCORING_ERROR',cause);} }
export class MigrationError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'MIGRATION_ERROR',cause);} }
export class ConfigurationError extends ApplicationError { constructor(message:string,cause?:unknown){super(message,'CONFIGURATION_ERROR',cause);} }

export function toUserError(error:unknown, fallback='عملیات انجام نشد؛ دوباره تلاش کنید.'):string {
  if (error instanceof ValidationError) return 'اطلاعات واردشده معتبر نیست.';
  if (error instanceof PersistenceError) return 'ذخیره‌سازی محلی در دسترس نیست.';
  if (error instanceof AIProviderError) return 'سرویس هوشمند فعلاً در دسترس نیست.';
  if (error instanceof RetrievalError) return 'بازیابی منبع با خطا روبه‌رو شد.';
  if (error instanceof MigrationError) return 'برخی داده‌های نسخهٔ قبلی قابل بازیابی کامل نبودند.';
  return fallback;
}