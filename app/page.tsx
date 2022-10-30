import { Homepage } from './Homepage';
import RootLayout from './layout';
export default function Home() {
  return (
    <RootLayout className="mx-auto max-w-2xl">
      <Homepage />
    </RootLayout>
  );
}
