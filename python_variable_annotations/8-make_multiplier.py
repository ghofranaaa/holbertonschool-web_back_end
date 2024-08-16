#!/usr/bin/env python3
"""
This module provides a function that returns another
function for multiplying a float by a specified multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.
    """
    def multiplier_func(value: float) -> float:
        """Multiplies the input float by the multiplier."""
        return value * multiplier

    return multiplier_func
