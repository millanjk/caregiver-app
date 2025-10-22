# Railway Deployment Guide for Essential Care Services

## Prerequisites

Before deploying to Railway, ensure you have:

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Push your code to GitHub
3. **Required Services**:
   - PostgreSQL Database
   - Clerk Authentication Account
   - Email Service (Gmail/SMTP)
   - Crisp Chat Account (optional)

## Environment Variables Setup

### Required Environment Variables

Set these in your Railway project settings:

#### Database
```
POSTGRES_URL=postgresql://username:password@host:port/database
```

#### Clerk Authentication
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_publishable_key
CLERK_SECRET_KEY=sk_live_your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

#### Email Configuration
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
```

#### Optional Services
```
NEXT_PUBLIC_CRISP_WEBSITE_ID=your_crisp_website_id
NEXTAUTH_URL=https://your-app.railway.app
NEXTAUTH_SECRET=your_random_secret_string
```

## Deployment Steps

### 1. Connect GitHub Repository

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will automatically detect it's a Next.js project

### 2. Add PostgreSQL Database

1. In your Railway project, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically provide the `POSTGRES_URL` environment variable

### 3. Configure Environment Variables

1. Go to your service settings
2. Navigate to "Variables" tab
3. Add all required environment variables listed above
4. Make sure to use production values (not test keys)

### 4. Deploy

1. Railway will automatically build and deploy your app
2. Monitor the build logs for any errors
3. Once deployed, your app will be available at `https://your-app.railway.app`

### 5. Database Migration

After deployment, run database migrations:

1. Go to your Railway project terminal
2. Run: `npm run db:push` or `npm run db:migrate`

## Post-Deployment Checklist

- [ ] Verify app loads correctly
- [ ] Test authentication (sign up/sign in)
- [ ] Test contact form functionality
- [ ] Verify email notifications work
- [ ] Check database connection
- [ ] Test all major features

## Troubleshooting

### Common Issues

1. **Build Failures**: Check Node.js version compatibility
2. **Database Connection**: Verify `POSTGRES_URL` is correct
3. **Authentication Issues**: Ensure Clerk keys are production keys
4. **Email Not Working**: Check SMTP credentials and app passwords

### Logs and Debugging

- Use Railway's built-in logging to debug issues
- Check the "Deployments" tab for build logs
- Use Railway CLI for advanced debugging: `railway logs`

## Custom Domain (Optional)

1. Go to your Railway project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXTAUTH_URL` environment variable

## Monitoring and Maintenance

- Monitor Railway dashboard for resource usage
- Set up alerts for downtime
- Regularly update dependencies
- Monitor database performance

## Cost Optimization

- Use Railway's free tier for development
- Monitor resource usage
- Consider upgrading only when needed
- Use Railway's usage analytics to optimize costs
