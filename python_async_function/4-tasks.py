#!/usr/bin/env python3
"""
This module provides an asynchronous coroutine `task_wait_n`
that spawns multiple `task_wait_random` tasks and returns
their sorted delays.
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Spawns task_wait_random n times with the specified max_delay
    and returns the sorted list of delays."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
