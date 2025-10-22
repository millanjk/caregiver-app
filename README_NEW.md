# Essential Care Services - Caregiver App

A comprehensive Next.js application for Essential Care Services, providing home care services for seniors and individuals with disabilities.

## Features

- **Modern UI/UX**: Built with Next.js 15, React 19, and Tailwind CSS
- **Authentication**: Secure user authentication with Clerk
- **Contact Forms**: Email notifications via Nodemailer
- **Database**: PostgreSQL with Drizzle ORM
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Live Chat**: Crisp Chat integration
- **Blog System**: MDX-based blog posts
- **Service Pages**: Comprehensive service information
- **Testimonials**: Customer feedback showcase

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd caregiver-app-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

See `env.example` for all required environment variables:

- **Database**: `POSTGRES_URL`
- **Authentication**: Clerk keys
- **Email**: SMTP configuration
- **Chat**: Crisp Chat ID

## Database Setup

1. **Generate migrations**
   ```bash
   npm run db:generate
   ```

2. **Push schema to database**
   ```bash
   npm run db:push
   ```

3. **Open Drizzle Studio** (optional)
   ```bash
   npm run db:studio
   ```

## Deployment

### Railway (Recommended)

See [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md) for detailed instructions.

### Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── resources/         # Resource pages
│   ├── services/          # Service pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── lib/                  # Utility libraries
│   ├── db.ts            # Database connection
│   ├── schema.ts        # Database schema
│   └── actions.ts       # Server actions
├── drizzle/             # Database migrations
├── public/             # Static assets
└── blog-posts/         # MDX blog posts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Essential Care Services.

## Support

For support, contact:
- Email: info@ecservices.app
- Phone: (540)-681-3507
- Website: https://www.ecservices.app
