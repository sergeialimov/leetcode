select machine_id
from (
    SELECT machine_id,
      a.timestamp - b.timestamp as diff
    from activity a on a.
  )