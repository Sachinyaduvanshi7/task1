import React, { useEffect } from 'react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import Error from '../components/ErrorPage/Error';

Sentry.init({
  dsn: 'https://cbd17ac93f104aed9613d6b46030ba3d@o960544.ingest.sentry.io/5909513',
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  debug: false,
  release: 'BizNextEcomSpiral@1.0.0',
  beforeBreadcrumb(breadcrumb) {
    if (breadcrumb.category === 'console') {
      return null;
    }
    return breadcrumb;
  },
  beforeSend: (event) => {
    if (window.location.hostname === 'localhost') {
      return null;
    }
    return event;
  },
  tracesSampleRate: 1,
});

function Page(props) {

  useEffect(() => {
    document.title = (props.title ? props.title + ' | ' : '') + 'BizNext - An Integrated Business Management Platform';
  }, [props]);

  return <Sentry.ErrorBoundary fallback={<Error />}>{props.component}</Sentry.ErrorBoundary>;
}

export default Page;
