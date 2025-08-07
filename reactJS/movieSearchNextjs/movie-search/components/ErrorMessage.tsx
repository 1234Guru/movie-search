// ErrorMessage.tsx
export default function ErrorMessage({ message }: { message: string }) {
  return <div className="text-center py-8 text-red-600">{message}</div>;
}
