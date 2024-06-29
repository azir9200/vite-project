import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { Button } from '../ui/button';


const TodoFilter = () => {
    const [position, setPosition] = useState('bottom');
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-primary-gradient text-xl font-semibold">
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className='bg-grey-700  text-lg  text-green-600' >Filter by priority </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup   value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem className='text-sky-500'  value="high">High</DropdownMenuRadioItem>

            <DropdownMenuRadioItem className='text-sky-500' value="medium">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem className='text-sky-500' value="medium">Medium</DropdownMenuRadioItem>

          
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;