-- INSERT DEFAULT SPIN WHEEL PRIZES
-- Run this if prizes table is empty

-- Check if prizes exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM spin_wheel_prizes LIMIT 1) THEN
    -- Insert default prizes
    INSERT INTO spin_wheel_prizes (name, type, value, probability, color, icon, sort_order, is_active)
    VALUES
      ('Nothing', 'nothing', 0, 30.00, '#6B7280', 'x', 1, true),
      ('10 Coins', 'coins', 10, 25.00, '#3B82F6', 'coins', 2, true),
      ('25 Coins', 'coins', 25, 20.00, '#10B981', 'coins', 3, true),
      ('50 Coins', 'coins', 50, 15.00, '#F59E0B', 'coins', 4, true),
      ('100 Coins', 'coins', 100, 7.00, '#EF4444', 'coins', 5, true),
      ('Extra Spin', 'ticket', 1, 2.50, '#8B5CF6', 'ticket', 6, true),
      ('Jackpot 500', 'coins', 500, 0.50, '#EC4899', 'star', 7, true);
    
    RAISE NOTICE 'Default prizes inserted successfully';
  ELSE
    RAISE NOTICE 'Prizes already exist';
  END IF;
END $$;

-- Verify prizes
SELECT 
  id,
  name,
  type,
  value as coins,
  probability,
  color,
  is_active,
  sort_order
FROM spin_wheel_prizes
ORDER BY sort_order;
