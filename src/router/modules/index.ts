import authRoutes from './auth';
import dashboardRoutes from './dashboard';
import userRoutes from './user';

export const routes = [
    ...authRoutes,
    ...dashboardRoutes,
    ...userRoutes,
];