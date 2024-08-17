#!/usr/bin/env python3
import asyncio
from 3-tasks import task_wait_random
import List


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns task_wait_random n times with the specified max_delay
    and returns the sorted list of delays."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)

    return sorted(delays)
