# Movies List App

This is a React + Vite web application for browsing and managing your favorite movies. It features:

- Fast development with Vite
- Modular React components
- React Context for state management
- Accessible navigation and controls
- Error boundaries for robust UI
- API integration for movie data
- CSS Modules for scoped styling
- Basic test setup (Jest + React Testing Library)

## Setup

1. Clone the repository
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Copy `.env.example` to `.env` and add your API keys:
   ```sh
   cp .env.example .env
   # Edit .env and add your keys
   ```
4. Start the development server:
   ```sh
   pnpm run dev
   ```

## Usage

- Browse popular movies
- Search for movies
- Add/remove favorites (persisted in localStorage)
- Navigate using keyboard and screen readers

## Accessibility

- ARIA attributes and keyboard navigation are implemented for all major controls.
- All interactive elements are focusable and labeled.

## Testing

- Run tests with:
  ```sh
  pnpm test
  ```

## Deployment

- Deploy to GitHub Pages:
  ```sh
  pnpm run deploy
  ```

## Contributing

1. Fork the repo and create a feature branch
2. Add your changes and tests
3. Submit a pull request

## License

MIT
