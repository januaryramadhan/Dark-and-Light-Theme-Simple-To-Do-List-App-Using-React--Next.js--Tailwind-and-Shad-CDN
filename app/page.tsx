import { ModeToggle } from "@/components/dark-mode-toggle";
import TaskForm from "@/components/task-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div className="container flex flex-col justify-center mt-5 items-center h-auto w-screen font-summerFont">
        <Card className="w-[350px]">
          <CardHeader className="flex flex-row justify-between px-4">
            <div>
              <CardTitle className="text-primary" >To-Do List</CardTitle>
              <CardDescription>Get your things done.</CardDescription>
            </div>
            <ModeToggle />
          </CardHeader>
          <Separator />
          <div className="px-4 mt-5">
            <TaskForm  />
          </div>
        </Card>
      </div>
    </>
  );
}
