export const mdStyles = {
  heading: {
    display: 'flex',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: '700',
    marginTop: 0,
    marginBottom: '0.5rem',
  },
  p: {
    display: 'flex',
    marginTop: 0,
    marginBottom: '1rem',
  },
  a: {
    color: '#3b82f6',
    textDecoration: 'none',
    '&:hover': {
      color: '#2563eb',
      textDecoration: 'none',
    },
  },
  blockquote: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: '#d1d5db',
    borderLeftWidth: '4px',
    fontWeight: '400',
    fontStyle: 'italic',
    marginTop: '2rem',
    marginBottom: '2rem',
    paddingLeft: '1.5rem',
    color: '#1f2937',
    lineHeight: '1.75rem',
    fontSize: '1.125rem',
  },
  code: {
    display: 'none',
    backgroundColor: '#d1d5db',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '1px',
    paddingBottom: '1px',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  hr: {
    borderColor: '#d1d5db',
    marginTop: '3rem',
    marginBottom: '3rem',
    borderRadius: '9999px',
  },
  ul: {
    display: 'flex',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  ol: {
    display: 'flex',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  li: {
    display: 'flex',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  strong: {
    display: 'flex',
  },
  em: {
    display: 'flex',
  },
  table: {
    width: '100%',
    color: '#111827',
    marginBottom: '1rem',
    padding: 0,
    borderCollapse: 'collapse',
  },
  tr: {
    borderColor: '#374151',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
    '&:nth-child(2n)': {
      backgroundColor: '#f3f4f6',
    },
  },
  th: {
    fontWeight: '700',
    borderColor: '#374151',
    textAlign: 'left',
    margin: 0,
    padding: '6px 13px',
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  td: {
    borderColor: '#374151',
    textAlign: 'left',
    margin: 0,
    padding: '6px 13px',
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
} as const
