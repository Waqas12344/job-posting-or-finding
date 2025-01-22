import react from "react"
import { Link } from "react-router-dom";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
    const user = false;

    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className="text-2xl font-bold">Job <span className="text-[#F83002]">Portal</span></h1>
                </div>
                <div className="flex gap-5">
                    <ul className="flex items-center font-medium gap-5">
                        {/* <li> <Link> Home </Link> </li> */}
                        <li>Home </li>
                        <li>Jobs </li>
                        <li>Broswer </li>
                    </ul>

                    {
                        !user ?(
                            <div className="flex items-center gap-2"> 
                                <Button variant ="outline">Login</Button>
                                <Button className="bg-[#6f43ba] hover:bg-[#4f2891]">SignUp</Button>
                                </div>
                        ):(
                            <Popover>
                            <PopoverTrigger>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="flex gap-2 space-y-2">
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                    <div>
                                        <h4 className="font-medium">Waqas Mern Stack</h4>
                                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col my-2">
                                    <div className="flex items-center gap-2 w-fit cursor-pointer text-gray-600">
                                        <User2 />
                                        <Button variant="link">View Profile</Button>
                                    </div>
                                    <div className="flex items-center gap-2 w-fit cursor-pointer text-gray-600">
                                        <LogOut />
                                        <Button variant="link">LogOut</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        )
                    }
             

                </div>
            </div>

        </div>
    )
}
export default Navbar;