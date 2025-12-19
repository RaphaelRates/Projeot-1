import mockLogs from './mocklogs.json';

const logsService = mockLogs.map((log) => ({
  ...log,
  timestamp: new Date(log.timestamp),
}))

export default logsService;