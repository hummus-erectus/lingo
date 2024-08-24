import { NotebookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
}

export const UnitBanner = ({
  title,
  description,
}: Props) => {
  return(
    <div className="w-full rounded-xl bg-nesBlue p-5 text-white flex items-center justify-between font-dotgothic16">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p className="text-lg">
          {description}
        </p>
      </div>
      <Link href="/lesson">
        {/* <Button
          size="lg"
          variant="secondary"
          className="hidden lg:flex border-2 border-b-4 active:border-b-2"
        > */}
        <button type="button" className="hidden lg:flex min-w-32 nes-btn is-primary font-bold">
          <NotebookText className="mr-2 inline"/>
          続ける
        </button>
        {/* </Button> */}
      </Link>

    </div>
  )
}