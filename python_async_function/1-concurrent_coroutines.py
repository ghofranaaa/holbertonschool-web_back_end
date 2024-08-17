#!/usr/bin/env python3
import asyncio
from typing import List
import wait_random from 0-basic_async_syntax 


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns wait_random n times with the specified max_delay."""
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delay)
