import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
<<<<<<< HEAD
import { deleteInvoice } from '@/app/lib/actions';
=======
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
<<<<<<< HEAD
      href={`/dashboard/invoices/${id}/edit`} 
=======
      href="/dashboard/invoices"
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
<<<<<<< HEAD
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form>
=======
  return (
    <>
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
<<<<<<< HEAD
    </form>
=======
    </>
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50
  );
}
